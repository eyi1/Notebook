import { combineReducers } from 'redux';
import notebooksReducer from './notebooksReducer'
import notesReducer from './notesReducer'


const rootReducer = combineReducers({ 
notebooks: notebooksReducer,
notes: notesReducer
})

export default rootReducer;