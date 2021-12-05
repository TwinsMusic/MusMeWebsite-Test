import React, {Fragment} from "react";

import {BrowserRouter as Router, Route} from "react-router-dom";
import {Link} from "react-router-dom";

function Header() {
  return (
    <nav class = "navbar" role = "navigation">
      {/* 
          For reference on how navbar works see Bulma docs
      */}
        <div class = "navbar-brand">
          <a class = "navbar-item">
            <Link to = "/">
              <img src = "logo.png"></img>
            </Link>
          </a>
        </div>
        <div class = "navbar-menu">
          <div class = "navbar-start">
            <div class = "navbar-item has-dropdown is-hoverable">
              <div class = "navbar-link">
                <Link to = "/about">
                About
                </Link>
              </div>
              <div class = "navbar-dropdown">
                <a class = "navbar-item">
                  <Link to = "/team">
                    Meet our Team
                  </Link>
                </a>
                <a class = "navbar-item">
                  <Link to = "/artists">
                    Featured Artists
                  </Link>
                </a>
              </div>
            </div>
            <div class = "navbar-item">
              <Link to = "/subscribe">
                Subscribe
              </Link>
            </div>
            <div class = "navbar-item">
              <Link to = "/browse">
                Browse Music
              </Link>
            </div>
            <div class = "navbar-item">
              <Link to = "/artist-submit">
                Submit Music
              </Link>
            </div>
            <div class = "navbar-item">
              <Link to = "/faq">
                FAQs
              </Link>
            </div>
          </div>
          <div class = "navbar-end">
          <div class = "navbar-item">
              123-456-7890
              </div>
            
              <Link to = "/cart">
              <button class = "button">
                Cart
              </button>
              </Link>
           

          </div>
        </div>

    </nav> 
    
  );
}

export default Header;
