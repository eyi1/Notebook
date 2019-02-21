import React from 'react';
import { Form } from 'react-bootstrap'

class NoteInput extends React.Component{
    constructor(){
        super()
        this.state={
            id:'',
            title: '',
            content:'',
        }
    }
    render(){
        return(
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name='title' onChange={this.handleOnChange} value={this.state.title} placeholder="Title" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write Something Here</Form.Label>
                        <Form.Control as="textarea" name='content' onChange={this.handleOnChange} value={this.state.content} rows="10" />
                    </Form.Group>
                    </Form>
            </div>
        )
    }
}

export default NoteInput