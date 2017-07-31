import * as types from './mutation-types'

export const addPurchases = ({ commit }, purchase) => {
  if (purchase.inventory > 0) {
    commit(types.ADD_PURCHASES, {
      id: purchase.id,
      title: purchase.title,
      price: purchase.price,
      inventory: purchase.inventory
    })
  }
}
