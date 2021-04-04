/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line react-hooks/exhaustive-deps */

import React from "react"
import { Button } from "@chakra-ui/react"
// import { test } from "../../utils/jquery"

export function LandingPage(props) {
    const login = () => window.location.href = "http://localhost:3002/api/auth/discord"
    return(
        <div className="App">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Anoher Link</a>
      </li>
   
    </ul>
    <form className="form-inline my-2 my-lg-0">
  <Button className= "btn btn-success btn-outline-success my-2 my-sm-0 hvr-hang hvr-round-corners hvr-radial-in"
        onClick = {login} colorScheme="cyan" >Login</Button>
    </form>
  </div>
</nav>





       
      </div>
    )
}

/* <Button classNameName= "btn btn-success btn-outline-success my-2 my-sm-0 hvr-hang hvr-round-corners hvr-radial-in"
onClick = {login} colorScheme="cyan" >Login</Button>*/