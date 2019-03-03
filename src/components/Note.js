import React from 'react'
import { Card } from 'react-bootstrap'
// import NoteInput from './NoteInput'

class Note extends React.Component {

    // handler = event => {
    //     return <NoteInput />
    // }

    render(){
        return(
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.note.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">id: {this.props.note.id}</Card.Subtitle>
                        <Card.Text>
                            {this.props.note.content}
                        </Card.Text>
                        <Card.Link href="#" onClick={ () => this.props.toggleEdit(this.props.note) }>Edit</Card.Link> 
                        {/* <Card.Link href="#" onClick={this.handler}>Edit</Card.Link> */}
                        <Card.Link href="#" onClick={() => this.props.deleteNote(this.props.note)}>Delete</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Note