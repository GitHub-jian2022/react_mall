import { searchKeyWord, clearKeyWord } from "../actionType/searchType";
const defaultState = {
  searchInput: {
    keyword: ''
  }
};
export default (state = defaultState, action) => {
  if (action.type === searchKeyWord) {
    let newState = Object.assign({}, state);
    newState.searchInput.keyword = action.value;
    return newState;
  }else if (action.type === clearKeyWord) {
    let newState = Object.assign({}, state);
    newState.searchInput.keyword = action.value;
    return newState;
  }
  return state;
}