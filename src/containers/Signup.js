import React from 'react'
import { connect } from 'react-redux';
import { Form, Button, Col } from 'react-bootstrap'
import {signup} from '../actions/authActions'
//import { withRouter } from 'react-router-dom';
//import Form from 'react-bootstrap/Form'

class Signup extends React.Component{
    constructor(){
        super()
        this.state={
            name: '',
            email_string: '',
            password: '',
        }
    }

    handleOnChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
    })
    }

    submitForm = event => {
        event.preventDefault();
        //debugger
              if (this.props.signup(this.state)){
                //this.props.history.push('/notebooks')
                window.alert("Thank you for signing up.")
            } else {
                window.alert("We're having issues creating your account.")
            }
          
      }


    render(){
        return(
            <div>
                <Form className="signup-form" onSubmit={this.submitForm}>
                    <Form.Group as={Col} md="4" controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" onChange={this.handleOnChange} type="text" placeholder="Enter name" value={this.state.name} />
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email_string" onChange={this.handleOnChange} type="email" placeholder="Enter email" value={this.state.email_string} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" onChange={this.handleOnChange }type="password" placeholder="Password" value={this.state.password} />
                    </Form.Group>
                    <Button className="signup-btn" variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </div>
        )
    }
}
//export default Signup
export default connect(null, {signup})(Signup)