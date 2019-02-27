import * as types from './actionTypes'
import { ModalTitle } from 'react-bootstrap';
const notebooksLink = `/api/v1/notebooks`
//const notesLink = `/api/v1/notes`

//action creators
const setNotes = notes => {
    //debugger;
    console.log(notes)
    return{
        type: types.REQUEST_NOTES,
        notes
    }
}

const addNote = note => {
    console.log(note)
    return{
        type: 'ADD_NOTE',
        note
    }
}

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
    //debugger;
    console.log(typeof notebookId)
    return (dispatch) => {
        fetch(`${notebooksLink}/${notebookId}/notes`)
        .then(response => response.json())
        .then(notes => {
                dispatch(setNotes(notes))
        })
        .catch(error => console.log(error))
    }
}

export const createNote = (note) => {
    console.log(note)
    const notebookId = note.notebookId
    const title = note.title 
    const content = note.content

    return (dispatch) => {
        fetch(`${notebooksLink}/${notebookId}/notes`, {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({title: title, content: content, notebookId: notebookId})
        })
        //.then(response => console.log(response))
        .then(response => response.json())
        //.then(note => console.log(note))
        .then(note => {
            dispatch(addNote(note))
             //debugger;
        })
        .catch(error => console.log(error))
   }
 }

 export const deleteNote = note => {
     console.log(note)
     console.log(noteId)
     //const noteId = note.id
     //const notebookId = note.notebookId
     return(dispatch) => {
         fetch(`${notebooksLink}/${notebookId}/notes/${noteId}`, {
            method: 'DELETE',
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
          dispatch(destroyNote(noteId))
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
