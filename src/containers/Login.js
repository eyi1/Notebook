import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { connect } from 'react-redux';
import { login } from '../actions/authActions'

class Login extends React.Component {
    constructor(){
        super()
        this.state={
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

    handleOnSubmit = event => {
        event.preventDefault();
        console.log(this.state)
         if (this.props.login(this.state)) {
        //   //this.props.history.push('/notebooks')
           window.alert("You're Logged In!")
        } else {
          window.alert("Sorry, something went wrong. Please try logging in again.")
        }
      }

    render(){
        return(
            <div>
                <Form className="login-form" onSubmit={this.handleOnSubmit}>
                    <Form.Group as={Col} md="4" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email_string" onChange={this.handleOnChange} type="email" placeholder="Enter email" value={this.state.email_string} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" onChange={this.handleOnChange} type="password" placeholder="Password" value={this.state.password} />
                    </Form.Group>
                    <Button className="login-btn" variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, {login})(Login)