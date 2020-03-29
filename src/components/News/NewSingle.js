import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';

const NewSingle = ({item}) => (
    <>
    <Col lg={4} md={6} className="d-flex pb-3">
        <CardDeck>
        <Card>
            <Card.Img variant="top" src={item.urlToImage} alt={item.title} />
            <Card.Body>
                <Card.Title><h5 className="single-h5">{item.source.name}</h5></Card.Title>
                <Card.Text>
                    <p className="single-p">{item.title}</p>
                </Card.Text>
                <Button variant="primary" size="sm">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">Full Article</a>
                </Button>
            </Card.Body>
        </Card>
        </CardDeck>
    </Col>
   </>
);

export default NewSingle;