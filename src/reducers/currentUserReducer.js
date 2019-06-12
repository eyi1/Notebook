import * as types from '../actions/actionTypes';

export default (state=null, action) => {
    switch(action.type){
        
        case "SET_CURRENT_USER":
            //console.log('action.user', action.user)
            return action.currentUser
        
        // case types.ADD_NOTE:
        //     console.log('action.add-note', action.note)
        //     return [...state, action.note]

        // case types.UPDATE_NOTE:
        // console.log(action.note)
        //     return state.map(note => note.id === action.note.id ? action.note : note)
        
        case "DELETE_USER":
            return {}

        default:
            return state
    }
}