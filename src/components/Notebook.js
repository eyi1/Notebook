import React from 'react'

class Notebook extends React.Component {
    render(){
        return(
            <div>{this.props.notebook.name}</div>
        )
    }
}

export default Notebook