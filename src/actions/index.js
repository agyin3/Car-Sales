export const REMOVE_FEATURE = 'REMOVE_FEATURE'
export const BUY_ITEM = 'BUY_ITEM'

export const removeFeature = item => {
  // dispatch an action here to remove an item
};

export const buyItem = item => {
  return {
    type: BUY_ITEM,
    payload: item
  }
};