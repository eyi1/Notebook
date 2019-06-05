import React from 'react';
import { Form, Button, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateNote } from '../actions/noteActions'

class EditNoteForm extends React.Component{
    constructor(props){
        super(props)
       // debugger
        this.state={
            id: props.note.editingNoteId,
            title: props.note.title,
            content: props.note.content,
            notebookId: props.note.notebookId,
            isEditing: props.note.isEditing
        }
    }

    handleOnChange = event => {
        const { value, name } = event.target;
            this.setState({
                [name]: value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.updateNote(this.state)
        this.props.toggleEdit(this.state.id)
    }


    render(){
         const isEnabled = this.state.title.length && this.state.content.length > 0;
        return(
            <div>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Col sm="12" >
                            <Form.Control size="lg" type="text" name='title' onChange={this.handleOnChange} value={this.state.title} placeholder="Title" />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Col sm="12">
                            <Form.Control as="textarea" name='content' onChange={this.handleOnChange} value={this.state.content} rows="15" placeholder="Start writing"/>
                        </Col>
                    </Form.Group>
                        <Col sm="12">
                             <Button disabled={!isEnabled} bsStyle="primary" type="submit">Save</Button>
                        </Col>
                    </Form>
            </div>
        )
    }
}

export default connect(null, {updateNote})(EditNoteForm)