import React from 'react'
import Note from './Note'

class Notes extends React.Component {     
    render(){
        const renderNotes = this.props.notesCollection.map(note => <Note key={note.id} note={note} deleteNote={this.props.deleteNote} toggleEdit={this.props.toggleEdit}/>)
        
        return(
            <div>
                {renderNotes}
            </div>  
        )
    }
}


export default Notes