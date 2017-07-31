import {Config, CognitoIdentityCredentials} from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails
} from "amazon-cognito-identity-js";
import awsConfig from "../config";

Config.region = awsConfig.region;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: awsConfig.IdentityPoolId
});

const userPool = new CognitoUserPool({
  UserPoolId: awsConfig.UserPoolId,
  ClientId: awsConfig.ClientId,
});

const LoginKey = `cognito-idp.${awsConfig.region}.amazonaws.com/${awsConfig.UserPoolId}`;

var cognitoUser;

export default {
  register(userData, callback) {
    const email = userData.email,
          password = userData.password,
          attributeList = [
            new CognitoUserAttribute({
              Name: 'email',
              Value: email
            })
          ]
    userPool.signUp(email, password, attributeList, null, (err, response) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, response);
      }
    })
  },
  verify(userData, callback) {
    const email = userData.email,
          code = userData.code;

    cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool
    });

    cognitoUser.confirmRegistration(code, true, function(err, response) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, response);
      }
    })
  },
  login(userData, callback) {
    const email = userData.email,
          password = userData.password;

    // TODO: validation

    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password
    }),
    cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool
    });

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
          Config.credentials = new CognitoIdentityCredentials({
              IdentityPoolId : awsConfig.IdentityPoolId,
              Logins : {
                  LoginKey : result.getIdToken().getJwtToken()
              }
          });
          callback(null, result);
      },
      onFailure: function(err) {
        callback(err, null);
      }
    })
  },
}
