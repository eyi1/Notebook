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
                        <Form.Control type="text" placeholder="Title" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write Something Here</Form.Label>
                        <Form.Control as="textarea" rows="5" />
                    </Form.Group>
                    </Form>
            </div>
        )
    }
}

export default NoteInput