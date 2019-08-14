import React from "react";

function Navbar({ children }) {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        { children }
    </nav>);
}

export default Navbar;