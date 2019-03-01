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
            notebookId: props.location.state.notebookId,
            isEditing: false
            //editingNoteId: ''
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        //this.toggleEditId = this.toggleEditId.bind(this);
    }

    toggleEdit() {
        console.log(this.state.isEditing, '1')
        this.setState({
           isEditing: !this.state.isEditing
        })
        console.log(this.state.isEditing,'2')
      }

    // toggleEditId(id) {
    //           console.log(id)
    //     this.setState({
    //         editingNoteId: id
    //     })
    // }


    componentDidMount(){
       const id = JSON.stringify(this.state.notebookId)        
       this.props.getNotes(id)
        //const { id } = this.props.match.params       
        //console.log(this.props.location.state)
        //console.log(this.props.location)
        //const id = JSON.stringify(this.props.location.state.notebookId)
        // console.log(id)
        // console.log(typeof id)     
        //console.log(typeof this.state.notebookId)
    }

    render(){
            const note = this.props.notesCollection.map(note=> note)
        return(
            <div>
                <Container lg="12" className="notesPage">
                    <Row>
                        <Col lg="4" className="notesWrapper"><Notes notesCollection={this.props.notesCollection} deleteNote={this.props.deleteNote} toggleEdit={this.toggleEdit}/></Col>
                        {this.state.isEditing ?           
                         <Col md="8" className="notesInput"><EditNoteForm note={note} notebookId={this.state.notebookId} /></Col> 
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