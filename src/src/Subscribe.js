
import Title from "./Title.js";
import Content from "./Content";
import React from "react";

import "./Subscribe.css";

class Subscribe extends React.Component {

  redirectToPurchase() {
    window.open("https://buy.stripe.com/test_6oE9AEdrzdMo6re001");
  }

  

  render() {
    const title = Title("Subscribe","Get access to the MusMe library");
    const content = Content(
      <section class="section">
          <div class="container" id = "subscribe-container" style = {{color: "white"}}>
              <h2 class="has-text-centered">Step 1: <span style={{color: "#9b51e0"}}>Purchase the Subscription</span></h2>
              <p class="has-text-centered">Purchase the MusMe annual subscription below. Read the <a class="custom-link" href="/terms">MusMe Annual Subscription Agreement and Terms of Use</a> before subscribing.</p>
              <button id="button-style" class="button is-rounded is-link is-hovered" onClick={this.redirectToPurchase}>SUBSCRIBE</button>
              <h2 class="has-text-centered">Step 2: <span style={{color: "#0693e3"}}>Sign up on the MusMe App</span></h2>
              <p class="has-text-centered">After purchasing the annual subscription, create an account on our free and easy-to-use <a class="custom-link" href="https://musmeapp.com/">MusMe app</a> for our subscribers. The app gives you access to all the sounds in the MusMe catalogue with monthly updates with new releases and unlimited downloads. It also allows you to choose your music by mood and tempo!</p>
              <h2 class="has-text-centered">Step 3: <span style={{color: "#00d084"}}>Use our Royalty-free Music!</span></h2>
              <p class="has-text-centered">Use our music to connect your pictures and video clips into a story in a personalized fashion. Feel free to use it on social media, your personal website, class projects, and much more! Watch the video below to learn about how to use MusMe’s royalty-free music for creators.</p>
              <p class="has-text-centered">You also have the option to request customized music catered to your specific project needs. Have a request or want to contact us for more details?
              <br></br> 
              <a class="custom-link" href="/contact">Fill out our Customize your Music Form</a> or email <a class="custom-link" href="mailto:twinsmusicny@yahoo.com">twinsmusicny@yahoo.com</a>.</p>
              <div class="has-text-centered">
              <iframe title="musme" class="has-text-centered" width="550" height="400" src="https://www.youtube.com/embed/BmCpppdI7IQ"></iframe>
              </div>
          </div>
        </section>
    );
    return (
      <div class="subscribe">
        {title}
        {content}
      </div>
    );
  }
}
export default Subscribe;
