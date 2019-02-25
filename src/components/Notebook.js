import React from 'react'
import { Dropdown} from 'react-bootstrap';
import {Container, Row, Col, Button }from 'react-bootstrap'
//import NotesContainer from '../containers/NotesContainer';
import { Link } from 'react-router-dom'


const Notebook = (props) =>
        <div>
            <Container>
                <Row>
                    <Col sm="2">{props.notebook.id}</Col>
                    {/* <Col sm="4"><Button onClick={()=> <NotesContainer notebook={props.notebook}/>}>{props.notebook.name}</Button></Col> */}
                    <Col><Link to={{pathname: '/notebooks/:id/notes', state:{ notebookId: props.notebook.id}}}>{props.notebook.name}</Link></Col>   
                    {/* <Col><Link to={{pathname: '/notes', state:{ notebookId: props.notebook.id}}}>{props.notebook.name}</Link></Col> */}
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

//class Notebook extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             props: props,
//             render: ''
//         }
//     }

//     handleClick(compName, e){
//         console.log(compName);
//         this.setState({render: compName});        
//     }

//     renderSubComp() {
//         if (this.state.render === 'notesContainer'){
//             return <NotesContainer notebook={this.state.props.notebook} />
//         }
//     }

//     render(){
//         return(
//             <div>
//             <Container>
//                 <Row>
//                     <Col sm="2">{this.state.props.notebook.id}</Col>
//                     <Col sm="4"><Button variant="light" onClick={this.handleClick.bind(this, 'notesContainer')}>{this.state.props.notebook.name}</Button></Col>
//                     {/* <Col sm="4"><button onClick={()=> <NotesContainer notebookId={this.state.props.notebook.id}/>}>{this.state.props.notebook.name}</button></Col> */}
//                     {/* <Col sm="4"><Button href='/notes'>{this.state.props.notebook.name}</Button></Col> */}
//                     {/* href='/notes'  */}
//                     <Col sm="2">EJ</Col>
//                     <Col sm="2">2/20/19</Col>
//                     <Col sm="2">
//                         <Dropdown>
//                             <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
//                             </Dropdown.Toggle>
                            
//                             <Dropdown.Menu>            
//                                 <Dropdown.Item as="button">Edit</Dropdown.Item>
//                                 <Dropdown.Item as="button" onClick={() => this.state.props.deleteNotebook(this.state.props.notebook.id)}>Delete</Dropdown.Item>
//                             </Dropdown.Menu>
//                         </Dropdown>
//                     </Col>
//                 </Row>
//             </Container>
//             <div>
//             {this.renderSubComp()}
//             </div>
//             </div>
//         )
//     }
// }


export default Notebook