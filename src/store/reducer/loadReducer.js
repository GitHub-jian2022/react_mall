import {LOADCATE} from '../actionType/loadType'
const initState={
    cates:[]
}
export default (state=initState,action)=>{
    switch(action.type){
        case LOADCATE:
            return {
                ...state,
                cates:action.cates
            }
        default:
            return state
    }
}