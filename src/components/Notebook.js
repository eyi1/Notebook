import React from 'react'
import { Dropdown} from 'react-bootstrap';
import {Container, Row, Col, Button }from 'react-bootstrap'
//import NotesContainer from '../containers/NotesContainer';
import { Link } from 'react-router-dom'

// const Notebook = (props) =>
class Notebook extends React.Component{  
    render(){
        const date = new Date(this.props.notebook.created_at)
        const srr = this.props.notebook.name.split('')[0].toUpperCase()
        const str = this.props.notebook.name.split('').slice(1).join('')
        const upcaseName = srr.concat(str)
        return(
          <div>
            <Container>
                <Row>
                    <Col sm="2">{this.props.notebook.id}</Col>
                    {/* \\<Col sm="4"><Button onClick={()=> <NotesContainer notebookId={this.props.notebook.id}/>}>{upcaseName}</Button></Col> */}
                    <Col><Link to={{pathname: `/notebooks/${this.props.notebook.id}/notes`, state:{ notebookId: this.props.notebook.id}}}>{upcaseName}</Link></Col>   
                    {/* <Col><Link to={{pathname: '/notes', state:{ notebookId: props.notebook.id}}}>{props.notebook.name}</Link></Col> */}                   
                    <Col sm="2">{new Intl.DateTimeFormat('en-US').format(date)}</Col>
                    <Col sm="2">{this.props.notebook.user.name}</Col>
                    <Col sm="2">
                        <Dropdown>
                            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                            </Dropdown.Toggle>
                            
                            <Dropdown.Menu>            
                                <Dropdown.Item as="button" onClick={() => this.props.toggleEditButton(this.props.notebook)}>Rename notebook</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => this.props.deleteNotebook(this.props.notebook.id)}>Delete notebook</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
          </div>
        )
    }
}


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