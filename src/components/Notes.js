import React from 'react'
//import Table from 'react-bootstrap/Table'
//import {Container, Row, Col }from 'react-bootstrap'

class Notes extends React.Component {     
    render(){
        const renderNotes = this.props.notesCollection.map(note => note.title)
        //this.props.notebooksList.map(notebook => <Notebook key={notebook.id} notebook={notebook} />)
        
        return(
            <div>
                {renderNotes}
            </div>  
        )
    }
}


export default Notes