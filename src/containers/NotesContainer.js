import React from 'react';
import NoteInput from '../components/NoteInput'
import Notes from '../components/Notes'
import { getNotes } from '../actions/noteActions'
import { connect } from 'react-redux';

class NotesContainer extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         notebookId: props.notebook.id
    //     }
    // }

    componentDidMount(){
        //const { id } = this.props.match.params
        
        console.log(this.props.location.state)
        console.log(this.props.location)
        const id = JSON.stringify(this.props.location.state.notebookId)
        console.log(id)
        console.log(typeof id)
        
        // const id = JSON.stringify(this.state.notebookId)
        this.props.getNotes(id)
    }

    render(){
        // const renderNotes = this.props.notesCollection.map(note => note.title)
        return(
            <div>
                {/* <NoteInput /> */}
                <Notes notesCollection={this.props.notesCollection}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        notesCollection: state.notes
    }
}


export default connect(mapStateToProps, {getNotes})(NotesContainer)