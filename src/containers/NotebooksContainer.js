import React from 'react'
import NotebookInput from '../components/NotebookInput'
import NoteBooks from '../components/Notebooks'
import { connect } from 'react-redux'
import {getNotebooks, deleteNotebook} from '../actions/notebookActions'
import { Button, ButtonToolbar } from 'react-bootstrap'

class NoteBooksContainer extends React.Component {  
    constructor(){
        super();
        this.state = {
            // render: '',
            show: false,
            notebookArray: null,
            arrSort: false
        }
    }
    
    sortHandler = event => {
        console.log('clicked')
        const newNotebooksArr = this.props.notebooksList.map(notebook => notebook)
        const sortedArr = newNotebooksArr.sort(function(a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
            arrSort: true
        })
    }

    resetHandler = event => {
        this.setState({
            show: false,
            notebookArray: this.props.notebooksList,
            arrSort: false
        })
    }

    componentDidMount(){
        this.props.getNotebooks()
    }

    // handleClick(component, e){
    //     console.log(component);
    //     this.setState({
    //        // render: component,
    //         show: true
    //     });    
    // }  

    // _renderSubComponent(){
    //     if (this.state.render === 'notebookInput'){
    //         return <NotebookInput modal={this.state.show} />
    //     }
    // }

    render(){
        let close = () => this.setState({ show: false});
        console.log(this.state.arr)
        console.log(this.state)
        return(
            <div>
                <div className="notebook-page-title">
                        My notebook list 
                </div>    
                <div className="container-fluid-one">                           
                    <Button 
                        className="addNotebook-btn"
                        variant="primary"                   
                        onClick={() => this.setState({ show: true})}
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
                    modal={this.state.show}
                    onHide={close}
                    />   
                </div>                                          
                <div>
                    {this.state.arrSort ? 
                    <NoteBooks notebooksList={this.state.notebookArray} deleteNotebook={this.props.deleteNotebook}/> 
                    : 
                    <NoteBooks notebooksList={this.props.notebooksList} deleteNotebook={this.props.deleteNotebook}/> 
                    }
                </div>
                <div>
                    {/* {this._renderSubComponent()} */}
                </div>  
            </div>
        )        
    }
}

const mapStateToProps = state => {
    console.log(state.notebooks)
    return {       
        notebooksList: state.notebooks
    }
  }

export default connect (mapStateToProps, {getNotebooks, deleteNotebook})(NoteBooksContainer)