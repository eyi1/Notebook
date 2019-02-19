import * as types from './actionTypes'

const notebooksLink = `/api/v1/notebooks`

const setNotebooks = notebooks => {
    return {
        type: types.REQUEST_NOTEBOOKS,
        notebooks
    }
}

// const addNotebook = notebook => {
//     return {
//         type: 'ADD_NOTEBOOK',
//         notebook
//     }
// }

// //reducer

export const getNotebooks = () => {
    return(dispatch) => {
        
        fetch(notebooksLink)
        .then(response => response.json())
        .then(notebooks => {
          dispatch(setNotebooks(notebooks))
          debugger;
        })
    }
}
