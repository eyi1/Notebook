import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import { createNotebook } from '../actions/notebooks'
import { connect } from 'react-redux'
 
class NotebookInput extends React.Component {
    constructor(props){
        super(props)
        this.state={
            id: '',
            name: '',
            show: props.modal
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.state.show!==nextProps.modal){ //false vs true
        this.setState({show: nextProps.modal})
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
        this.props.createNotebook(this.state.name)
        //debugger;
    }

    render(){

        let close = () => this.setState({ show: false});

        return(
        <div>      
            <div className="modal-container">
            <Modal
              show={this.state.show}
              onHide={close}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">Notebook</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                     <form className="form-group" onSubmit={this.handleOnSubmit}>
                         <label>name:</label>
                         <input type="text" className="form-control" name='name' onChange={this.handleOnChange} value={this.state.name} placeholder="notebook name"/><br />
                         <Button bsStyle="primary" type="submit">Save</Button>
                     </form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={close}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>    
        </div>
        )
    }
}

export default connect(null, {createNotebook})(NotebookInput)