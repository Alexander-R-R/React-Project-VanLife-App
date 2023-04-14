import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

  const activeStyle = {
    fontWeight: "bold",
       textDecoration: "underline",
          color: "#161616"
  }

    return (
           <header>
            <Link to="/">#VANLIFE</Link>
            <nav>
              <Link to="/host">Host</Link>
              <Link to="/about">About</Link>
              <Link to="/vans">Vans</Link>
            </nav>
          </header> 
    )
}