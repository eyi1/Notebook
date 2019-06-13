import React from 'react'
import NotebookInput from '../components/NotebookInput'
import NoteBooks from '../components/Notebooks'
import { connect } from 'react-redux'
import {getNotebooks, deleteNotebook} from '../actions/notebookActions'
import { Button} from 'react-bootstrap'

class NoteBooksContainer extends React.Component {  
    constructor(){
        super();
        this.state = {
            id: null,
            name: null,
            show: false,
            isEdit: false,
            notebookArray: [], //will store a new array of notebooks
            isSort: false, 
        }
        this.toggleEditButton = this.toggleEditButton.bind(this)
    }

    toggleEditButton(notebook){
        console.log(notebook)
        this.setState({
            id: notebook.id,
            name: notebook.name,
            isEdit: true,
            show: true
        })
    }

    sortHandler = e => {
        const newNotebooksArr = this.props.notebooksList.map(notebook => notebook)
        const sortedArr = newNotebooksArr.sort(function(a, b) {
            var nameA = a.name.toUpperCase(); 
            var nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });

        this.setState({
            show: false,
            notebookArray: sortedArr,
            isSort: true
        })
    }

    resetHandler = event => {
        this.setState({
            show: false,
            notebookArray: this.props.notebooksList,
            isSort: false
        })
    }

    componentDidMount(){
        this.props.getNotebooks()
    }

    componentDidUpdate(prevProps){
        if (prevProps.notebooksList !== this.props.notebooksList ){
            this.setState({
                isSort: false 
            })
        }
    }

    render(){
        let close = () => this.setState({show: false})
        console.log(this.props)
        console.log(this.props.notebooksList)
        return(
            <div>
                <div className="notebook-page-title">
                    My notebook list 
                </div>    
                <div className="container-fluid-one">                           
                    <Button 
                        className="addNotebook-btn"
                        variant="primary"                   
                        onClick={() => this.setState({ show: true, isEdit: false})}
                        >
                        + new notebook
                    </Button>
                </div>
                <div className="container-fluid-two">
                    <Button
                        className="sort-btn"
                        variant="light"
                        onClick={this.sortHandler}>
                        Sort A-Z
                    </Button>
                    <Button
                        className="sort-btn"
                        variant="light"
                        onClick={this.resetHandler}>
                        Reset
                    </Button>              
                </div>
                <div>                    
                    <NotebookInput
                    isEdit={this.state.isEdit}
                    modal={this.state.show}
                    onHide={close}
                    notebook={this.state}
                    toggleEditButton={this.toggleEditButton}
                    />                  
                </div>                                          
                <div>
                    {this.state.isSort ? 
                    <NoteBooks 
                    notebooksList={this.state.notebookArray} 
                    deleteNotebook={this.props.deleteNotebook} 
                    toggleEditButton={this.toggleEditButton}/> 
                    : 
                    <NoteBooks 
                    notebooksList={this.props.notebooksList} 
                    deleteNotebook={this.props.deleteNotebook} 
                    toggleEditButton={this.toggleEditButton}/> 
                    }
                </div>
            </div>
        )        
    }
}

const mapStateToProps = state => {
    return {       
        notebooksList: state.notebooks
    }
  }

export default connect (mapStateToProps, {getNotebooks, deleteNotebook})(NoteBooksContainer)