import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import { Input, FormBtn } from "../../Components/SearchForm"
import { Container } from "../../Components/Grid";

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

    handleFormSubmit = event => {
        event.preventDefault();

        // call google API
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
            </Container>
        )
    }
}

export default Search;