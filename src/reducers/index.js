import { combineReducers } from 'redux';
import notebooksReducer from './notebooksReducer'
import notesReducer from './notesReducer'
import currentUserReducer from './currentUserReducer'


const rootReducer = combineReducers({ 
    notebooks: notebooksReducer,
    notes: notesReducer,
    currentUser: currentUserReducer
})

export default rootReducer;