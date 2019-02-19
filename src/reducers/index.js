import { combineReducers } from 'redux';
import notebooksReducer from './notebooksReducer'


const rootReducer = combineReducers({ 
notebooks: notebooksReducer
})

export default rootReducer;