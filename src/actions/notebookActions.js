import * as types from './actionTypes'

const notebooksLink = `/api/v1/notebooks`

const setNotebooks = notebooks => {
    return {
        type: types.REQUEST_NOTEBOOKS,
        notebooks
    }
}

const addNotebook = notebook => {
    //console.log(notebook)
    return {
        type: types.ADD_NOTEBOOK,
        notebook
    }
}

const destroyNotebook = notebookId => {
    //debugger
    return{
        type: types.DELETE_NOTEBOOK,
        notebookId
    }
}

const setNotebook = notebook => {
    //debugger
    return{
        type: types.UPDATE_NOTEBOOK,
        notebook
    }
}

export const getNotebooks = () => {
    return(dispatch) => {    
        const authToken = `Bearer ${localStorage.getItem("token")}`       
        fetch(notebooksLink,{
            headers : {
                'Content-Type': 'application/json',
                'Authorization': authToken
            } 
        })
        .then(response => response.json())
        .then(notebooks => {
            if (notebooks.message){
                console.log(notebooks.message)
            }else{
          dispatch(setNotebooks(notebooks))
          //debugger;
        }})
        .catch(error => console.log(error))
    }
}

export const createNotebook = notebookName => {
    //console.log('C')
    return(dispatch) => {  
        const authToken = `Bearer ${localStorage.getItem("token")}`     
        fetch(notebooksLink, {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
                'Authorization': authToken
            },
            body:JSON.stringify({name: notebookName})
        })
        .then(response => response.json())
        .then(notebook => {          
            //console.log('D')   
            dispatch(addNotebook(notebook))
        })
         .catch(error => console.log(error))
    }
    //console.log('E')
}

export const updateNotebook = (notebook) => {
    //debugger
    const notebookId = notebook.notebookId
    const name = notebook.notebookName

    return(dispatch) => {
        const authToken = `Bearer ${localStorage.getItem("token")}`
        fetch(`${notebooksLink}/${notebookId}`, {
            method: 'PATCH',
            headers : {
                'Content-Type': 'application/json',
                'Authorization': authToken
            },
            body: JSON.stringify({name: name})
        })
        .then(response => response.json())
        .then(notebook => {
            dispatch(setNotebook(notebook))
        })
        .catch(error => console.log(error))
    }
}

export const deleteNotebook = (notebookId) => {
    return(dispatch) => {
        const authToken = `Bearer ${localStorage.getItem("token")}`
        fetch(`${notebooksLink}/${notebookId}`, {
            method: 'DELETE',
            headers : {
                'Content-Type': 'application/json',
                'Authorization': authToken
            }
        })
        .then(response => {
          dispatch(destroyNotebook(notebookId))
        })
        .catch(error => console.log(error))
    }
}