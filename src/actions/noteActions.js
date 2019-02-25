import * as types from './actionTypes'
const notesLink = `/api/v1/notebooks`
const generalNotes = `/api/v1/notes`

//action creators
const setNotes = notes => {
    debugger;
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

export const getNotes = (notebookId) => {
    debugger;
    console.log(typeof notebookId)
    return (dispatch) => {
        fetch(`${notesLink}/${notebookId}/notes`)
            .then(response => response.json())
            .then(notes => {
                dispatch(setNotes(notes))
            })
            .catch(error => console.log(error))
    }
}

// export const getNotes = () => {
//     debugger;
//     return (dispatch) => {
//         fetch(generalNotes)
//             .then(response => response.json())
//             .then(notes => {
//                 dispatch(setNotes(notes))
//             })
//             .catch(error => console.log(error))
//     }
// }
