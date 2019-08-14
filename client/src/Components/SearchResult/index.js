import React, { Component } from "react";

function SearchResult({ children }) {
    return (
        <div className="container">
            { children }
        </div>
    )
}

export class SaveBtn extends Component {
    state = {
        id : this.props.id,
        title: this.props.title,
        author: this.props.author,
        description: this.props.description,
        image: this.props.imageLink,
        preview: this.props.previewLink  
    };

    onClickSave = () => {
        console.log(this.state);
    }

    render() {
        return (
            <button onClick={this.onClickSave}>
                {this.props.children}
            </button>
        )
    }
}

export default SearchResult;