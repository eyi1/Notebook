import React from 'react'
import NotebookInput from '../components/NotebookInput'
import NoteBooks from '../components/Notebooks'
import { connect } from 'react-redux'
import {getNotebooks, deleteNotebook} from '../actions/notebookActions'
import { Button } from 'react-bootstrap'

class NoteBooksContainer extends React.Component {  
    constructor(){
        super();
        this.state = {
            render: '',
            show: false,
        }
    }
     
    handleClick(component, e){
        console.log(component);
        this.setState({
           // render: component,
            show: true
        });        
    }
    
    _renderSubComponent(){
        if (this.state.render === 'notebookInput'){
            return <NotebookInput modal={this.state.show} />
        }
    }

    componentDidMount(){
        this.props.getNotebooks()
    }

    render(){
        let close = () => this.setState({ show: false});
        return(
            <div>
                <div class="notebook-page-title">
                        My notebook list 
                </div>
                <div class="text-center">    
                  <div class="container-fluid">             
                   <Button className="addNotebook-btn"
                        bsStyle="primary"
                         bsSize="large"                      
                         onClick={() => this.setState({ show: true})}
                     >
                     + new notebook
                    </Button>
                  </div>          
                  <NotebookInput
                    modal={this.state.show}
                    onHide={close}
                    />                                 
                </div>
                
                <div>
                    {/* {this._renderSubComponent()} */}
                </div>
                
                <div>
                    <NoteBooks notebooksList={this.props.notebooksList} deleteNotebook={this.props.deleteNotebook}/> 
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