import React from 'react'
import Notebook from './Notebook'
//import Table from 'react-bootstrap/Table'
import {Container, Row, Col }from 'react-bootstrap'

class Notebooks extends React.Component {     
    render(){
        const renderNotebooks = this.props.notebooksList.map(notebook => <Notebook key={notebook.id} notebook={notebook} />)
        //this.props.notebooksList.map(notebook => <Notebook key={notebook.id} notebook={notebook} />)
        
        return(
            <div className="NotebooksTable">
                <Container>
                    <Row>
                        <Col sm><strong>ID</strong></Col>
                        <Col sm><strong>Name</strong></Col>
                        <Col sm><strong>Created By</strong></Col>
                        <Col sm><strong>Posted</strong></Col>
                        <Col sm><strong>Actions</strong></Col>
                    </Row>
                </Container>
                {renderNotebooks}
            </div>  
        )
    }
}


export default Notebooks

            {/* <Table responsive="sm"> 
                 <thead>
                     <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Created By</th>
                        <th>Posted</th>
                        <th>Actions</th>
                     </tr>
                 </thead>
            </Table> */}