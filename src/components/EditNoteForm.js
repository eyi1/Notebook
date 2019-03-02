import React from 'react';
import { Form, Button, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateNote } from '../actions/noteActions'

class EditNoteForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id: this.props.note.id,
            title: this.props.note.title,
            content: this.props.note.content,
            notebookId: this.props.notebookId
            
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
        debugger;
        this.props.updateNote(this.state)
        this.setState({
            title: '',
            content: ''
        })
    
    }

    render(){
        // const isEnabled = this.state.title.length && this.state.content.length > 0;
        return(
            <div>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        {/* <Form.Label>Title</Form.Label> */}
                        <Col sm="12" >
                            <Form.Control size="lg" type="text" name='title' onChange={this.handleOnChange} value={this.state.title} placeholder="Title" />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        {/* <Form.Label>Write Something Here</Form.Label> */}
                        <Col sm="12">
                            <Form.Control as="textarea" name='content' onChange={this.handleOnChange} value={this.state.content} rows="15" placeholder="Start writing"/>
                        </Col>
                    </Form.Group>
                        <Col sm="12">
                             {/* <Button disabled={!isEnabled} bsStyle="primary" type="submit">Save</Button> */}
                             <Button bsStyle="primary" type="submit">Save</Button>
                        </Col>
                    </Form>
            </div>
        )
    }
}

export default connect(null, {updateNote})(EditNoteForm)