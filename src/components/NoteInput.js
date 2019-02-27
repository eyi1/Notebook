import React from 'react';
import { Form, Button, Col } from 'react-bootstrap'
// import { connect } from 'react-redux'

class NoteInput extends React.Component{
    constructor(){
        super()
        this.state={
            id:'',
            title: '',
            content:'',
            //notebookId:
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
                        {/* <Form.Label>Title</Form.Label> */}
                        <Col sm="12" >
                            <Form.Control size="lg" type="text" name='title' onChange={this.handleOnChange} value={this.state.title} placeholder="Title" />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        {/* <Form.Label>Write Something Here</Form.Label> */}
                        <Col sm="12">
                            <Form.Control as="textarea" name='content' onChange={this.handleOnChange} value={this.state.content} rows="10" placeholder="Start writing"/>
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

export default NoteInput