    //  render(){
    //     return(
    //         this.props.notesCollection.map(note=> {
    //         if (this.state.isEditing){
    //             console.log('edit note form yes')
    //             return (
                    
    //                 <div> 
    //                     <Container lg="12" className="notesPage">
    //                       <Row>   
    //                         <Col md="4" className="notesInput"><Notes notesCollection={this.props.notesCollection} deleteNote={this.props.deleteNote} isEditing={this.state.isEditing} editNote={this.toggleEdit}/></Col>
    //                         <Col lg="8" className="notesWrapper"><EditNoteForm note={note} notebookId={this.state.notebookId} /></Col>
    //                      </Row>
    //                     </Container>
    //                 </div>
    //             )
            
    //         }else{
    //             console.log('false')
    //             return (

    //             <div>
    //                 <Container lg="12" className="notesPage">
    //                     <Row>
    //                         <Col lg="4" className="notesWrapper"><Notes notesCollection={this.props.notesCollection} deleteNote={this.props.deleteNote} editNote={this.toggleEdit}/></Col>
    //                         <Col md="8" className="notesInput"><NoteInput notebookId={this.state.notebookId}/></Col>  
    //                     </Row>
    //                 </Container>
    //             </div>
    //             )}
    //         }
    //     ) 
    // )}
 
    // render(){
    //     return (
    //         <div className="lists-container">
    //             {this.props.notesCollection.map( note => {
    //                 if ( this.state.isEditing === note.id) {
    //                     console.log('edit form')
    //                     return (<EditNoteForm
    //                             note={note} 
    //                             notebookId={this.state.notebookId}
                                
    //                             />)
    //                 } else {
    //                     return (<NoteInput 
    //                          notebookId={this.state.notebookId}
    //                             />)
    //                 }
    //             })}

    //             <Notes notesCollection={this.props.notesCollection} deleteNote={this.props.deleteNote} toggleEdit={this.toggleEdit}  />
    //         </div>
    //     )