import * as types from '../actions/actionTypes';

export default (state=null, action) => {
    switch(action.type){
        
        case "SET_CURRENT_USER":
            //console.log('action')
            return action.currentUser
        
        case "DELETE_USER":
            return {}

        default:
            return state
    }
}