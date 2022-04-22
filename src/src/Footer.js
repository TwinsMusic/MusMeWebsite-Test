import React from "react";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div class = "footer has-background">
      <div class="columns">
        <div class="column">
          <figure id="footer-logo" class="image is-128x128">
            <Link to="/"><img src = "images/logo.png" alt=""></img></Link>
          </figure>
        </div>    
        <div class="column">
          <div class="columns">
            <div class="column">
              <Link class="footer-links" to = "/about">
                <p>ABOUT</p>
              </Link>
              <Link class="footer-links" to = "/subscribe">
                <p>SUBSCRIBE</p>
              </Link>
              <Link class="footer-links" to = "/browse">
                <p>BROWSE</p>
              </Link>
            </div>
            <div class="column">
              <Link class="footer-links" to = "/artist-submit">
                <p>SUBMIT MUSIC</p>
              </Link>
              <Link class="footer-links" to = "/faq">
                <p>FAQ/SUPPORT</p>
              </Link>
              <Link class="footer-links" to = "/terms">
              <p>TERMS OF USE</p>
              </Link>
            </div>
          </div>
          <Link id="sub-button" to = "/subscribe">
          <p><button id="button-style" class="button is-rounded is-link is-hovered">SUBSCRIBE</button></p>
          </Link>
          <p id="footer-info">
          +1 (646) 413-9374<br></br>
          <a class="footer-custom-link" href="mailto:twinsmusicny@yahoo.com">twinsmusicny@yahoo.com</a>
          </p>
          <div class="column">
          <div class="content has-text-centered">
            <nav class="level">
            <div class="level-item">
            <a href="https://www.instagram.com/twinsmusicny/">
                <figure class="image is-32x32">
                  <img src = "images/social/IG-Logo.png" alt=""></img>
                </figure>
              </a>
              </div>
              <div class="level-item">
              <a href="https://www.facebook.com/twinsmusicny">
                <figure class="image is-32x32">
                  <img src = "images/social/FB-Logo.png" alt=""></img>
                </figure>
              </a>
              </div>
              <div class="level-item">
              <a href="https://www.youtube.com/c/TwinsMusicEnterprises">
                <figure class="image is-32x32">
                  <img src = "images/social/YT-Logo.png" alt=""></img>
                </figure>
              </a>
              </div>
              <div class="level-item">
              <a href="https://www.linkedin.com/company/twinsmusicny/">
                <figure class="image is-32x32">
                  <img src = "images/social/LI-Logo.png" alt=""></img>
                </figure>
              </a>
              </div>
              </nav>
          </div>
          </div>
          </div>
        <div class="column">
        <Link class="footer-custom-link" to = "/"><p id="footer-musme">MusMe</p></Link>
        </div>
        </div>
      </div>
  );
}

export default Footer;
