import * as types from './actionTypes'
const notesLink = `/api/v1/notes`

//action creators
const setNotes = notes => {
    console.log(notes)
    return{
        type: types.REQUEST_NOTES,
        notes
    }
}

// const addNote = note => {
//     return{
//         type: 'ADD_NOTE',
//         note
//     }
// }

// //updates form
// const updateNote = note => {
//     return{
//         type: 'UPDATE_NOTE',
//         note
//     } 
// }

// const removeNote = note => {
//     return{
//         type: 'DELETE_NOTE',
//         note
//     }
// }

// Async Actions

export const getNotes = () => {
    return (dispatch) => {
        return fetch(notesLink)
            .then(response => response.json())
            .then(notes => {
                dispatch(setNotes(notes))
            })
            .catch(error => console.log(error))
    }
}
