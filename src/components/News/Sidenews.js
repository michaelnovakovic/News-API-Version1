import React, { Component} from 'react';
import SingleSide from './SingleSide';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

class Sidenews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
        };
    }

    componentDidMount() {
        const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=991b1bb6ce2b4563b20b3b6715f1fe3b`;

        axios.get(url)
        .then((response) => {
            this.setState({
                sidenews: response.data.articles
            })
        })
        .catch((error) => console.log(error))
    }

    renderItems() {
        return this.state.sidenews.map((item) => (
            <SingleSide key={item.url} item={item} />
        ));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    {this.renderItems()}
                </Row>
            </Container>
        );
    }
}

export default Sidenews;