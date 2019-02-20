import * as types from '../actions/actionTypes';

export default (state=[], action) => {
    switch(action.type){
        case types.REQUEST_NOTEBOOKS:
        //console.log(action.notebooks)
            return action.notebooks

        case types.ADD_NOTEBOOK:
           // console.log(action.notebook)
            console.log(action)
            //return state.concat(action.notebook)
            return [...state, action.notebook]
        
        case types.DELETE_NOTEBOOK:
        //     console.log(state)
            const notebooks = state.filter(notebook => notebook.id !== action.id)
            return notebooks

        default:
        return state       
    }
}