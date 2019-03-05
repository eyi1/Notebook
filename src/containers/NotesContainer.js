import React from 'react';
import NoteInput from '../components/NoteInput'
import Notes from '../components/Notes'
import EditNoteForm from '../components/EditNoteForm'
import { getNotes, deleteNote } from '../actions/noteActions'
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'

class NotesContainer extends React.Component{

    constructor(props){
        super(props)
        this.state={
            title: '',
            content: '',
            //name: props.location.state.name,
            notebookId: props.location.state.notebookId,
            isEditing: false,
            editingNoteId: ''
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit(note) {
        console.log(note)
        this.setState({
           isEditing: !this.state.isEditing,
           editingNoteId: note.id,
           title: note.title,
           content: note.content
        })
      }

    componentDidMount(){
       const id = JSON.stringify(this.state.notebookId)        
       this.props.getNotes(id)
    //     //const { id } = this.props.match.params       
    //     //console.log(this.props.location.state)
    //     //console.log(this.props.location)
    //     //const id = JSON.stringify(this.props.location.state.notebookId)
    //     // console.log(id)
    //     // console.log(typeof id)     
    //     //console.log(typeof this.state.notebookId)
    }

    render(){
            //const note = this.props.notesCollection.map(noteObj => noteObj)
        return(
            <div>
                <header>
                    <div id='notebookHeader'>
                        {this.state.name}
                    </div>
                </header>
                <Container lg="12" className="notesPage">
                    <Row>
                        <Col lg="4" className="notesWrapper"><Notes notesCollection={this.props.notesCollection} deleteNote={this.props.deleteNote} toggleEdit={this.toggleEdit}/></Col>
                        {this.state.isEditing ?           
                         <Col md="8" className="notesInput"><EditNoteForm note={this.state} toggleEdit={this.toggleEdit}/></Col> 
                         :              
                         <Col md="8" className="notesInput"><NoteInput notebookId={this.state.notebookId} /></Col>
                        }
                        </Row>
                </Container>
            </div>
        )
    }
}      

const mapStateToProps = state => {
    return{
        notesCollection: state.notes
    }
}


export default connect(mapStateToProps, {getNotes, deleteNote})(NotesContainer)