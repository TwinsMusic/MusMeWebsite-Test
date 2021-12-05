import React, {Fragment} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div class = "footer">
      <div class="columns">
        <div class="column">
          <figure class="image is-128x128">
            <img src = "logo.png"></img>
          </figure>
        </div>
        
        <div class="column">
          <div class="columns">
            <div class="column">
              <Link to = "/about">
                ABOUT
              </Link>
              <p>SERVICES</p>
              <p>BROWSE</p>
            </div>
            <div class="column">
              <Link to = "/artist-submit">
                <p>SUBMIT MUSIC</p>
              </Link>
              <Link to = "/faq">
                FAQ/SUPPORT
              </Link>
              <p>TERMS OF USE</p>
            </div>
          </div>

          <button class="button">SUBSCRIBE</button>

          <p>+1 (646) 413-9374</p>
          <p>twinsmusicny@yahoo.com</p>

          <div class="columns">
            <div class="column is-one-fifth">
              <a href="https://www.instagram.com/twinsmusicny/">
                <figure id="social" class="image is-32x32">
                  <img src = "IG-Logo.png"></img>
                </figure>
              </a>
            </div>
            <div class="column is-one-fifth">
              <a href="https://www.facebook.com/twinsmusicny">
                <figure id="social" class="image is-32x32">
                  <img src = "FB-Logo.png"></img>
                </figure>
              </a>
            </div>
            <div class="column is-one-fifth">
              <a href="https://www.youtube.com/c/TwinsMusicEnterprises">
                <figure id="social" class="image is-32x32">
                  <img src = "YT-Logo.png"></img>
                </figure>
              </a>
            </div>
            <div class="column is-one-fifth">
              <a href="https://www.linkedin.com/company/twinsmusicny/">
                <figure id="social" class="image is-32x32">
                  <img src = "LI-Logo.png"></img>
                </figure>
              </a>
            </div>
          </div>

        </div>

        <div class="column">
          <b>MusMe</b>
        </div>

      </div>
      
    </div>
    
    
  );
}

export default Footer;
