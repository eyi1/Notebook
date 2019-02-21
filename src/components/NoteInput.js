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

    handleOnChange = event => {
        const { value, name } = event.target;
            this.setState({
                [name]: value
        })
    }

    handOnSubmit = event => {
        event.preventDefault();
    }

    render(){
        const isEnabled = this.state.title.length && this.state.content.length > 0;
        return(
            <div>
                <Form onSubmit={this.handOnSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name='title' onChange={this.handleOnChange} value={this.state.title} placeholder="Title" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write Something Here</Form.Label>
                        <Form.Control as="textarea" name='content' onChange={this.handleOnChange} value={this.state.content} rows="10" />
                    </Form.Group>
                    <Button disabled={!isEnabled} bsStyle="primary" type="submit">Save</Button>
                    </Form>
            </div>
        )
    }
}

export default NoteInput