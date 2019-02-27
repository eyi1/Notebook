import React from 'react';
import NoteInput from '../components/NoteInput'
import Notes from '../components/Notes'
import { getNotes } from '../actions/noteActions'
import { connect } from 'react-redux';
import { Button, Container, Row, Col } from 'react-bootstrap'

class NotesContainer extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         notebookId: props.notebook.id
    //     }
    // }

    constructor(props){
        super(props)
        this.state={
            title: '',
            content: '',
            notebookId: props.location.state.notebookId 
            // this.props.location.state.notebookId
        }
    }

    componentDidMount(){
        //const { id } = this.props.match.params
        
        //console.log(this.props.location.state)
        //console.log(this.props.location)
        //const id = JSON.stringify(this.props.location.state.notebookId)
       // console.log(id)
       // console.log(typeof id)
       
       console.log(typeof this.state.notebookId)
       const id = JSON.stringify(this.state.notebookId)
       console.log(typeof id)
        
       this.props.getNotes(id)
    }

    handleOnClick = event => {
        
        return <NoteInput notesCollection={this.props.notesCollection}/>
    }

    render(){
        // const renderNotes = this.props.notesCollection.map(note => note.title)
        return(
            <div>
                <Container lg="12" className="notesPage">
                    <Row>
                        {/* <Button onClick={this.handleOnClick}>+ new note</Button> */}
                        <Col lg="4" className="notesWrapper"><Notes notesCollection={this.props.notesCollection}/></Col>              
                        <Col md="8" className="notesInput"><NoteInput notesCollection={this.props.notesCollection}/></Col>  
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


export default connect(mapStateToProps, {getNotes})(NotesContainer)