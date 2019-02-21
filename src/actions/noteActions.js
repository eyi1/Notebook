import * as types from './actionTypes'
const notesLink = `/api/v1/notes`

//action creators
const setNotes = notes => {
    return{
        type: 'REQUEST_NOTES',
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
            .then(response => console.log(response.json()))
    }
}
