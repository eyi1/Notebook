import * as types from '../actions/actionTypes';

export default (state=[], action) => {
    switch(action.type){
        
        case types.REQUEST_NOTES:
            console.log('action.notes:', action.notes)
            return action.notes
        
        case types.ADD_NOTE:
            console.log('action.add-note', action.note)
            return [...state, action.note]

        case types.UPDATE_NOTE:
        console.log(action.note)
            return state.map(note => note.id === action.note.id ? action.note : note)

        case types.DELETE_NOTE:
            console.log(action.noteId)
            const notes = state.filter(note => note.id !== action.noteId)
            return notes

        default:
            return state
    }
}