import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <nav id="navigation-bar" class="navbar is-transparent is-fixed-top" role = "navigation">
      {/* 
          For reference on how navbar works see Bulma docs
      */}
        <div id="navbar-start" class = "navbar-brand">
          <a href="/" class = "navbar-start">
            <Link to = "/">
              <img src = "logo.png" alt=""></img>
            </Link>
          </a>
        </div>
        <div class = "navbar-menu">
          <div class = "navbar-start">
            <div class = "navbar-item has-dropdown is-hoverable">
              <div class = "navbar-link">
                <Link class="navbar-item-color" to = "/about">
                About
                </Link>
              </div>
              <div class = "navbar-dropdown is-boxed">
                  <Link class = "navbar-item navbar-item-color-dropdown" to = "/team" onClick={(event) => { event.target.blur(); }}>
                    Meet our Team
                  </Link>
                  <Link class = "navbar-item navbar-item-color-dropdown" to = "/artists" onClick={(event) => { event.target.blur(); }}>
                  Featured Artists
                  </Link>
                  <Link class = "navbar-item navbar-item-color-dropdown" to = "/contact" onClick={(event) => { event.target.blur(); }}>
                  Customize Your Music
                  </Link>
              </div>
            </div>
            <div class = "navbar-item">
              <Link class="navbar-item-color" to = "/subscribe">
                Subscribe
              </Link>
            </div>
            <div class = "navbar-item">
              <Link class="navbar-item-color" to = "/browse">
                Browse Music
              </Link>
            </div>
            <div class = "navbar-item">
              <Link class="navbar-item-color" to = "/artist-submit">
                Submit Music
              </Link>
            </div>
            <div class = "navbar-item">
              <Link class="navbar-item-color" to = "/faq">
                FAQs
              </Link>
            </div>
            <div class = "navbar-item">
              <Link class="navbar-item-color" to = "/terms">
                Terms of Use
              </Link>
            </div>
          </div>
          <div id="navbar-end" class = "navbar-end">
          <div class = "navbar-item navbar-item-color">
              123-456-7890
              </div>
              <Link class="navbar-item-color" to = "/cart">
              <button id="button-style" class = "button is-link is-hovered">
                Cart
              </button>
              </Link>
          </div>
        </div>
    </nav>  
  );
}

export default Header;
