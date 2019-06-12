import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import { createNotebook, updateNotebook } from '../actions/notebookActions'
import { connect } from 'react-redux'
 
class NotebookInput extends React.Component {
    constructor(props){
        super(props)
        //debugger
        this.state={
            id: '',
            name: '',
            show: props.modal,
            isEdit: props.isEdit,
            //notebookId: props.notebookId,
            //notebookName: props.notebook.name
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.state.show !== nextProps.modal){ //false vs true
          // console.log(this.state.show)
          // console.log(nextProps.modal)
        this.setState({show: nextProps.modal, isEdit: nextProps.isEdit})
        //debugger
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
        const notebookName = this.state.name
        const notebookId = JSON.stringify(this.props.notebook.id)
        // console.log('A')
        // console.log(this.state.isEdit)
        if (this.state.isEdit){
          this.props.updateNotebook({notebookName, notebookId})
        // console.log(this.state.isEdit)
        // console.log(this.props.notebook.id)
        // console.log('B')
        }else{
          this.props.createNotebook(notebookName)
        }
        this.setState({
            name: ''
        })
        //debugger;
    }

    //if the value of the input is empty do not submit form

    render(){

        let close = () => this.setState({ show: false});
        const isEnabled = this.state.name.length > 0;

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
                         <label htmlFor="name">name: </label>
                         <input type="text" className="form-control" name='name' onChange={this.handleOnChange} value={this.state.name} placeholder="notebook name"/>
                         <br />
                         <Button disabled={!isEnabled} onClick={this.props.onHide} variant="primary" type="submit">Save</Button>
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

export default connect(null, {createNotebook, updateNotebook})(NotebookInput)