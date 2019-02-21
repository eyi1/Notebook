import * as types from '../actions/actionTypes';

export default (state=[], action) => {
    switch(action.type){
        
        case types.REQUEST_NOTES:
        console.log('action.notes:', action.notes)
        return action.notes

        default:
        return state
    }
}