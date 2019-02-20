import React from 'react'

const Notebook = (props) =>
    <div className="row">
        <div className="col-md-4">
            {props.notebook.id}
        </div>
        <div className="col-md-6">
            {props.notebook.name}
        </div>
    </div>

export default Notebook