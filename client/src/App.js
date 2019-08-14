import React, { Component } from "react";
import Search from "./pages/Search";
import Navbar from "./Components/Navbar";

class App extends Component {
    state = {
        page: "search"
    }

    render() {
        return (
            <div>
                <Navbar>
                    <a className="navbar-brand" href="#">My Personal Book App</a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Saved</a>
                        </li>
                    </ul>
                </Navbar>
                <Search />
            </div>
        )
    }
}

export default App;