import React, { Component} from 'react';
import NewSingle from './NewSingle';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {
        const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=991b1bb6ce2b4563b20b3b6715f1fe3b`;

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => console.log.apply(error));

    }

    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item} />
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

export default News;