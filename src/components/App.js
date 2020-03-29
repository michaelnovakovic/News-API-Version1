import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Sidenews from './News/Sidenews';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      }
    }
};

  render() {
  return (
    <div className="App">
      <>
      <Container fluid>
        <Row className="title">
          <h1>News API Version 1.0</h1>
        </Row>
          <Row>
          <Col sm={8}>
            <h1 className="secondary-h1">BBC News</h1>
            <News news={this.state.news1} />
            <h1 className="secondary-h1">TechCrunch</h1>
            <News news={this.state.news2} />
          </Col>
          <Col sm={4}>
            <Sidenews news={this.state.news3} />
          </Col>
          </Row>
      </Container>
      </>
    </div>
  );
  }
}

export default App;
