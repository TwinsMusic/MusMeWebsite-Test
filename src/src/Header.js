import React, {Fragment} from "react";
import {Link} from "react-router-dom";

function Header() {

  
  return (
    <nav class = "navbar is-spaced" role = "navigation">
      {/* 
          For reference on how navbar works see Bulma docs
      */}
        <div class = "navbar-brand">
            <Link to = "/" class = "router-link">
              <img src = "images/logo.png"></img>
            </Link>
        </div>
        <div class = "navbar-menu" >
          <div class = "navbar-start">
            <div class = "navbar-item has-dropdown is-hoverable">
              <div class = "navbar-link">
                <Link to = "/about" class = "router-link">
                About
                </Link>
              </div>
              <div class = "navbar-dropdown">
                <a class = "navbar-item">
                  <Link to = "/about"style = {{color: "white"}}>
                    About Us
                  </Link>
                </a>
                <a class = "navbar-item">
                  <Link to = "/team"style = {{color: "white"}}>
                    Meet our Team
                  </Link>
                </a>
                <a class = "navbar-item">
                  <Link to = "/artists" style = {{color: "white"}}>
                    Featured Artists
                  </Link>
                </a>
              </div>
            </div>
            <div class = "navbar-item">
              <Link to = "/subscribe"class = "router-link">
                Subscribe
              </Link>
            </div>
            <div class = "navbar-item">
              <Link to = "/browse"class = "router-link">
                Browse Music
              </Link>
            </div>
            <div class = "navbar-item">
              <Link to = "/artist-submit"class = "router-link">
                Submit Music
              </Link>
            </div>
            <div class = "navbar-item">
              <Link to = "/faq"class = "router-link">
                FAQs
              </Link>
            </div>
            <div class = "navbar-item">
              <Link to = "/terms"class = "router-link">
                Terms of Use
              </Link>
            </div>
          </div>
          <div class = "navbar-end">
          <div class = "navbar-item">
              123-456-7890
              </div>
            
              <Link to = "/cart">
              <button class = "button is-primary">
                Cart
              </button>
              </Link>
           

          </div>
        </div>

    </nav> 


    
  );
}

export default Header;
