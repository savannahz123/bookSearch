import React, { Component } from "react";
import Search from "./pages/Search";
import Save from "./pages/Save";
import Navbar from "./Components/Navbar";

class App extends Component {
    state = {
        page: "search"
    }

    onClickSearch = () => {
        this.setState({page: "search"});
    }

    onClickSave = () => {
        this.setState({page: "save"});
    }

    render() {
        return (
            <div>
                <Navbar>
                    <a className="navbar-brand" href="/">My Personal Book App</a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.onClickSearch}>Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={this.onClickSave}>Saved</a>
                        </li>
                    </ul>
                </Navbar>
                <div>
                    {this.state.page === "search" ? (
                        <Search />
                    ) : (
                        <Save />
                    )}
                </div>
            </div>
        )
    }
}

export default App;