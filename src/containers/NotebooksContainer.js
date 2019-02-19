import React from 'react'
import NotebookInput from '../components/NotebookInput'
//import Popup from "reactjs-popup";

export default class NoteBooksContainer extends React.Component {  
    constructor(){
        super();
        this.state = {
            render: ''
        }
    }
     
    handleClick(component, e){
        console.log(component);
        this.setState({
            render: component
        });        
    }
    
    _renderSubComponent(){
        // switch(this.state.render){
        //     case 'notebookInput': return <NotebookInput />
        //     default:
        //     return ''
        //     }
        if (this.state.render === 'notebookInput'){
            return <NotebookInput />
        }
    }
   
    render(){
        return(
            <div>
                {/* <NotebookSideBar /> */}
                <div>
                    <button onClick={this.handleClick.bind(this, 'notebookInput')}> + new notebook</button>
                </div>
                <div>
                    {this._renderSubComponent()}
                </div>
            </div>
        )        
    }
}