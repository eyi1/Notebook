import React from 'react'

export default class NotebookInput extends React.Component {
    constructor(){
        super()
        this.state={
            name: '',
        }
    }

    handleOnChange = event => {     
        const { value, name } = event.target;
        this.setState({
          [name]: value
        })
    }

    // handleOnChange(e){
    //     this.setState=({
    //         [e.target.name]: e.target.value
    //     })
    // }

    handleOnSubmit = event => {
        event.preventDefault();
        
    }

    render(){
        return(
            <div>
                <form className='notebook-form' onSubmit={this.handleOnSubmit} >
                    {/* <label htmlFor="notebookName" className="col-md-4 control-label">Name:</label> */}
                    <label htmlFor="notebookName">name:</label>
                    <input type="text" name='name' onChange={this.handleOnChange} value={this.state.name} placeholder="notebook name"/><br />
                    <button>save notebook</button>
                </form>
                {this.state.name}
            </div>           
        )
    }
}