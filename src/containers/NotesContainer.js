import React from 'react';
import NoteInput from '../components/NoteInput'
import { getNotes } from '../actions/noteActions'
import { connect } from 'react-redux';

class NotesContainer extends React.Component{

    componentDidMount(){
        this.props.getNotes()
    }

    render(){
        return(
            <div>
                <NoteInput />
            </div>
        )
    }
}


export default connect(null, {getNotes})(NotesContainer)