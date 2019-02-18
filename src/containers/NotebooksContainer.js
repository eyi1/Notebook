import React from 'react'
import NotebookInput from '../components/NotebookInput'

export default class NoteBooksContainer extends React.Component {
    render(){
        return(
            <div>
                <NotebookSideBar />
                <NotebookInput />
            </div>
        )        
    }
}