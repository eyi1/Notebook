import React from 'react'
import Notebook from './Notebook'
import Table from 'react-bootstrap/Table'

class Notebooks extends React.Component {     
    render(){
        const renderNotebooks = this.props.notebooksList.map(notebook => <Notebook key={notebook.id} notebook={notebook} />)
        //this.props.notebooksList.map(notebook => <Notebook key={notebook.id} notebook={notebook} />)
        
        return(
            <div className="NotebooksTable">
             <Table responsive="md"> 
                 <thead>
                     <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Created By</th>
                        <th>Posted</th>
                        <th>Actions</th>
                     </tr>
                 </thead>
            </Table>
                <div className="row">
                    <div className="col-md-5">
                        {renderNotebooks}
                     </div>
                 </div>
             </div>
        )
    }
}


export default Notebooks