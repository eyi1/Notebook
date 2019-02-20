import React from 'react'
import NotebookInput from '../components/NotebookInput'
import NoteBooks from '../components/Notebooks'
import { connect } from 'react-redux'
import {getNotebooks, deleteNotebook} from '../actions/notebooks'
import { Button } from 'react-bootstrap';

//import Popup from "reactjs-popup";

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
        // switch(this.state.render){
        //     case 'notebookInput': return <NotebookInput />
        //     default:
        //     return ''
        //     }
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
                {/* <NotebookSideBar /> */}
                <div>
                    {/* <button onClick={this.handleClick.bind(this, 'notebookInput')}> + new notebook</button> */}
                      
                    <Button
                        bsStyle="primary"
                         bsSize="large"                      
                         onClick={() => this.setState({ show: true})}
                       // onClick={this.handleClick.bind(this, 'notebookInput')}
                     >
                     + new notebook
                    </Button>
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