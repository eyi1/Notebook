import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import { updateNotebook } from '../actions/notebookActions'
import { connect } from 'react-redux'
 
class EditNotebookInput extends React.Component {

    constructor(props){
        super(props)
        //debugger
        this.state={
            id: props.notebook.id,
            name: props.notebook.name,
            isEdit: props.modal,
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.state.isEdit !== nextProps.modal){ //false vs true
        this.setState({isEdit: nextProps.modal})
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
        //debugger;
        // const notebookName = this.state.name
        this.props.toggleEditButton(this.state)
        console.log('edit notebook input')
        // this.props.updateNotebook(this.state)
        // this.setState({
        //     name: ''
        // })
    }

    //if the value of the input is empty do not submit form

    render(){

        let x = () => this.props.toggleEditButton;
        const isEnabled = this.state.name.length > 0;

        return(
        <div>      
            <div className="modal-container">
            <Modal
              show={this.state.isEdit}
              onHide={x}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">Notebook</Modal.Title>
              </Modal.Header>
              <Modal.Body>     
                     <form className="form-group" onSubmit={this.handleOnSubmit}>
                         <label htmlFor="email">name: </label>
                         <input type="text" className="form-control" name='name' onChange={this.handleOnChange} value={this.state.name}/>
                         <br />
                         <Button disabled={!isEnabled} onClick={this.props.onHide} variant="primary" type="submit">Save</Button>
                     </form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={x}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>    
        </div>
        )
    }
}

export default connect(null, {updateNotebook})(EditNotebookInput)