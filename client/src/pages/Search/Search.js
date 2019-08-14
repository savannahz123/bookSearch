import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import { Input, FormBtn } from "../../Components/SearchForm"
import { Container, Col, Row } from "../../Components/Grid";
import google from "../../utils/google";
import SearchResult from "../../Components/SearchResult";

class Search extends Component {
    state = {
        books: [],
        title: "",
        author: ""
    }

    componentDidMount() {
        // something will happen here
    }

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = async event => {
        event.preventDefault();

        // call google API
        await google.getBooksByTitleAndAuthor(this.state.title, this.state.author).then(
            res => this.setState({books: res.data.items})
        ).catch(
            err => console.log(err)
        )
    }

    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1>Google Book Search</h1>
                </Jumbotron>
                <form>
                    <Input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="title"
                        placeholder="Title"
                    />
                    <Input
                        value={this.state.author}
                        onChange={this.handleInputChange}
                        name="author"
                        placeholder="Author"
                    />
                    <FormBtn
                        disabled={!(this.state.title || this.state.author)}
                        onClick={this.handleFormSubmit}
                    >
                        Search!
                    </FormBtn>
                </form>
                <SearchResult>
                    {(this.state.books && this.state.books.length) ? (
                        <Container>
                            {this.state.books.map(book => {
                                return (
                                    <Row>
                                        <Col size="sm-4">
                                            <img src={book.volumeInfo.imageLinks?book.volumeInfo.imageLinks.thumbnail:""} alt={book.volumeInfo.title}></img>
                                        </Col>
                                        <Col size="sm-8">
                                            <ul>
                                                <li>{book.volumeInfo.title}</li>
                                                <li>{book.volumeInfo.authors}</li>
                                                <li>{book.volumeInfo.description}</li>
                                            </ul>
                                            <button>Save me</button>
                                        </Col>
                                    </Row>
                                );
                            })}
                        </Container>
                    ) : (
                        <h3>No results to display</h3>
                    )}
                </SearchResult>
            </Container>
        )
    }
}

export default Search;