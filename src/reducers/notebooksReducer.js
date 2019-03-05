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

        case types.UPDATE_NOTEBOOK:
            return state.map(notebook => notebook.id === action.notebook.id ? action.notebook : notebook)
        
        case types.DELETE_NOTEBOOK:
            const notebooks = state.filter(notebook => notebook.id !== action.notebookId)
            return notebooks
            // let idx = state.map(notebook => notebook.id).indexOf(action.id)
            // return [
            //     ...state.slice(0, idx),
            //     ...state.slice(idx + 1)
            //   ]
        default:
        return state       
    }
}