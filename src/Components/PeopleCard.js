import React from 'react'
import {Card, Row, Col} from 'react-bootstrap';

export class PeopleCard extends React.Component {

getImageURL(info) {

    var array1 = []
    

    for(var i in info){
    array1.push([info [i]]);
    }
    return(array1[0])
    }


render() {
    return (
        
        <Card bg='white' text='white' >
        <Row>
        <Col  md = {2}>
            <a href= {this.props.details.person.url}><Card.Img variant="top" style={{ width: "10rem", margin:".5rem"  }} src={this.getImageURL(this.props.details.person.image)} /></a>
        </Col>
        <Col>
        <Card.Body>
        <Card.Title><a href= {this.props.details.person.url} > {this.props.details.person.name}</a> </Card.Title>
        </Card.Body>
        </Col>
        </Row>
        

      </Card>
            
        
    )
}


}