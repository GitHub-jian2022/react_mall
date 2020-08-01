import { GET_CATE } from '../actionType/cateType'
const initState={
    cates:[]
}
export default (state=initState,action)=>{
    switch(action.type){
        case GET_CATE:
            return {
                ...state,
                cates:action.data
            }
        default:
            return state
    }
}