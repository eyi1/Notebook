import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

class Home extends React.Component {
    render(){
        return(
            <div>
                <Jumbotron fluid>
                    <Container>
                     <h1>Stay Organized</h1>
                     <p> 
                         Start Writing
                     </p>
                    </Container>
                 </Jumbotron>
            </div>
        )
    }

}

export default Home