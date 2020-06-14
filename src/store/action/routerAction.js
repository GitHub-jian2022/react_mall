import {CHANGEPATH} from '../actionType/routerType'
export const changePath = (path) => {
    return {
        type:CHANGEPATH,
        path
    }
}