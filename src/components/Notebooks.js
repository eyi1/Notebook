import React from 'react'
import Notebook from './Notebook'
//import Table from 'react-bootstrap/Table'
import {Container, Row, Col }from 'react-bootstrap'

class Notebooks extends React.Component {     
    render(){
        const renderNotebooks = this.props.notebooksList.map(notebook => <Notebook key={notebook.id} notebook={notebook} deleteNotebook={this.props.deleteNotebook}/>)
        //this.props.notebooksList.map(notebook => <Notebook key={notebook.id} notebook={notebook} />)
        
        return(
            <div className="table">
                <Container>
                    <Row>
                        <Col md="2"><strong>ID</strong></Col>
                        <Col md="4"><strong>Name</strong></Col>
                        <Col md="2"><strong>Created By</strong></Col>
                        <Col md="2"><strong>Posted</strong></Col>
                        <Col md="2"><strong>Actions</strong></Col>
                    </Row>
                </Container>
                {renderNotebooks}
            </div>  
        )
    }
}


export default Notebooks