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
            // this.props.location.state.notebookId
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        console.log(this.state.isEditing, '1')
        this.setState({isEditing: !this.state.isEditing})
        console.log(this.state.isEditing,'2')
      }

    componentDidMount(){
        //const { id } = this.props.match.params       
        //console.log(this.props.location.state)
        //console.log(this.props.location)
        //const id = JSON.stringify(this.props.location.state.notebookId)
        // console.log(id)
        // console.log(typeof id)     
        //console.log(typeof this.state.notebookId)
       const id = JSON.stringify(this.state.notebookId)        
       this.props.getNotes(id)
    }

    //  render(){
    //     return(
    //         this.props.notesCollection.map(note=> {
    //         if (this.state.isEditing){
    //             console.log('edit note form yes')
    //             return (
                    
    //                 <div> 
    //                     <Container lg="12" className="notesPage">
    //                       <Row>   
    //                         <Col md="4" className="notesInput"><Notes notesCollection={this.props.notesCollection} deleteNote={this.props.deleteNote} isEditing={this.state.isEditing} editNote={this.toggleEdit}/></Col>
    //                         <Col lg="8" className="notesWrapper"><EditNoteForm note={note} notebookId={this.state.notebookId} /></Col>
    //                      </Row>
    //                     </Container>
    //                 </div>
    //             )
            
    //         }else{
    //             console.log('false')
    //             return (

    //             <div>
    //                 <Container lg="12" className="notesPage">
    //                     <Row>
    //                         <Col lg="4" className="notesWrapper"><Notes notesCollection={this.props.notesCollection} deleteNote={this.props.deleteNote} editNote={this.toggleEdit}/></Col>
    //                         <Col md="8" className="notesInput"><NoteInput notebookId={this.state.notebookId}/></Col>  
    //                     </Row>
    //                 </Container>
    //             </div>
    //             )}
    //         }
    //     ) 
    // )}
 
    render(){
        return(
            <div>
                <Container lg="12" className="notesPage">
                    <Row>
                        <Col lg="4" className="notesWrapper"><Notes notesCollection={this.props.notesCollection} deleteNote={this.props.deleteNote} editNote={this.toggleEdit}/></Col>
                        <Col md="8" className="notesInput"><NoteInput notebookId={this.state.notebookId} /></Col>  
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