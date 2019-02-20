import * as types from '../actions/actionTypes';

export default (state=[], action) => {
    switch(action.type){
        case types.REQUEST_NOTEBOOKS:
        console.log(action.notebooks)
            return action.notebooks
        
        default:
        return state

        case types.ADD_NOTEBOOK:
            console.log(action.notebook)
            //return state.concat(action.notebook)
            return [...state, action.notebook]
        
    }
}