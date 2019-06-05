import * as types from './actionTypes'

const notebooksLink = `/api/v1/notebooks`

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

const setNote = note => {
    //debugger;
    return{
        type: types.UPDATE_NOTE,
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
            body: JSON.stringify({title: title, content: content, notebookId: notebookId})
        })
        //.then(response => console.log(response))
        .then(response => response.json())
        //.then(note => console.log(note))
        .then(note => {
            dispatch(addNote(note))
        })
        .catch(error => console.log(error))
   }
 }

 export const deleteNote = note => {

     const noteId = note.id
     const notebookId = note.notebook.id

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

 export const updateNote = note => {
    // debugger
    console.log(note)
    const title = note.title
    const content = note.content
    //const noteId = JSON.stringify(note.id)
    //console.log(typeof noteId)
    const noteId = note.id
    const notebookId = note.notebookId

     return(dispatch) => {
        // debugger;
        console.log(dispatch)
        fetch(`${notebooksLink}/${notebookId}/notes/${noteId}`, {
            method: 'PATCH',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: title, content: content, notebookId: notebookId})
        })
        .then(response => response.json())
        //.then(res => console.log(res))
        // //.then(note => console.log(note))
        .then(note => {
            dispatch(setNote(note))
             //debugger;
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
