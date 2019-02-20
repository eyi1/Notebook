import React from 'react'
import { Dropdown} from 'react-bootstrap';
import {Container, Row, Col }from 'react-bootstrap'


const Notebook = (props) =>
        <div>
            <Container>
                <Row>
                    <Col sm>{props.notebook.id}</Col>
                    <Col sm>{props.notebook.name}</Col>
                    <Col sm>2 of 2</Col>
                    <Col sm>2 of 2</Col>
                    <Col sm>
                        <Dropdown>
                            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                            </Dropdown.Toggle>
                            
                            <Dropdown.Menu>            
                                <Dropdown.Item as="button">Edit</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => props.deleteNotebook(props.notebook.id)}>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
        </div>

export default Notebook

            // <div className="container">
    // <div className="row">
    //     <div className="col-sm-1">
    //         {props.notebook.id}
    //     </div>
    //     <div className="col-lg-5">
    //         {props.notebook.name}
    //     </div>
    //     <div className="col-lg-2">1</div>
    //     <div className="col-lg-2">2</div>
    //     <div className="col-lg-2">
        //   <Dropdown>
        //      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        //      </Dropdown.Toggle>
             
        //      <Dropdown.Menu>            
        //         <Dropdown.Item as="button">Edit</Dropdown.Item>
        //         <Dropdown.Item as="button">Delete</Dropdown.Item>
        //     </Dropdown.Menu>
        //  </Dropdown>
    //     </div>
    //     <br />
    // </div>
    // </div>