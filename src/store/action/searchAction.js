import { searchKeyWord,clearKeyWord } from "../actionType/searchType";

// SearchBar搜索
export const searchByKeyWord = (value) => ({
    type: searchKeyWord,
    value
  })

  // 清空SearchBar
export const clear= () => ({
  type: clearKeyWord,
  value: ''
})