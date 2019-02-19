import * as types from '../actions/actionTypes';

export default (state=[], action) => {
    switch(action.type){
        case types. REQUEST_NOTEBOOKS:
            return action.notebooks
        
        default:
        return state
        
    }
}