import * as types from './actionTypes'

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
        type: types.ADD_NOTE,
        note
    }
}

const editNote = note => {
    return{
        type: 'UPDATE_NOTE',
        note
    } 
}

const removeNote = noteId => {
    console.log(noteId)
    return{
        type: types.DELETE_NOTE,
        noteId
    }
}

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


 export const updateNote = note => {
    
    const noteId = note.id
    const notebookId = note.notebook.id

     return(dispatch) => {
        fetch(`${notebooksLink}/${notebookId}/notes/${noteId}`, {
            method: 'PATCH',
            headers : {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({title: title, content: content, notebookId: notebookId})
        })
        //.then(response => console.log(response))
        .then(response => response.json())
        //.then(note => console.log(note))
        .then(note => {
            dispatch(editNote(note))
             //debugger;
        })
        .catch(error => console.log(error))

     }
 }


 export const deleteNote = note => {

     const noteId = note.id
     const notebookId = note.notebook.id

     console.log(note)
     console.log(noteId)
     console.log(notebookId)

     return(dispatch) => {
         fetch(`${notebooksLink}/${notebookId}/notes/${noteId}`, {
            method: 'DELETE',
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
          dispatch(removeNote(noteId))
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
