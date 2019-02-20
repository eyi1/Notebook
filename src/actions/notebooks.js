import * as types from './actionTypes'

const notebooksLink = `/api/v1/notebooks`

const setNotebooks = notebooks => {
    return {
        type: types.REQUEST_NOTEBOOKS,
        notebooks
    }
}

const addNotebook = notebook => {
    console.log(notebook)
    return {
        type: 'ADD_NOTEBOOK',
        notebook
    }
}

// //reducer

export const getNotebooks = () => {
    return(dispatch) => {
        
        fetch(notebooksLink)
        .then(response => response.json())
        .then(notebooks => {
          dispatch(setNotebooks(notebooks))
          //debugger;
        })
        .catch(error => console.log(error))
    }
}

export const createNotebook = notebook => {
    // console.log(notebook = notebook.name)
    // console.log(typeof(notebook))
    return(dispatch) => {
        
        fetch(`${notebooksLink}`, {
            method: 'POST',
            headers : new Headers(),
            //body:JSON.stringify({notebook: notebook})
            body: {notebook: notebook}
        })
        .then(response => console.log(response))
        // .then(response => response.json())
        // .then(notebook => {
            
        //     dispatch(addNotebook(notebook))
        // })
        // .catch(error => console.log(error))
    }
}
