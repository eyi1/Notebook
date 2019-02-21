import React from 'react'
import { Dropdown} from 'react-bootstrap';
import {Container, Row, Col, Button }from 'react-bootstrap'


const Notebook = (props) =>
        <div>
            <Container>
                <Row>
                    <Col sm="2">{props.notebook.id}</Col>
                    <Col sm="4"><Button href="/notes" variant="link">{props.notebook.name}</Button></Col>
                    <Col sm="2">2 of 2</Col>
                    <Col sm="2">2 of 2</Col>
                    <Col sm="2">
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