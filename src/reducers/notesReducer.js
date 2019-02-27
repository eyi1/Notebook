import * as types from '../actions/actionTypes';

export default (state=[], action) => {
    switch(action.type){
        
        case types.REQUEST_NOTES:
            console.log('action.notes:', action.notes)
            return action.notes
        
        case types.ADD_NOTE:
            console.log('action.add-note', action.note)
            return [...state, action.note]

        case types.DELETE_NOTE:
            const notes = state.notes.filter(note => note.id !== action.noteId)
            return notes

        default:
            return state
    }
}