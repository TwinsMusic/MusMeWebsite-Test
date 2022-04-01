import React from "react";
import {Card} from 'react-bootstrap';
import Title from "./Title.js";
import Content from "./Content";

const title = Title("Team","Meet our team");

const content = Content(
  <div class="container">
    <Card style={{backgroundColor:"#12153e"}}>
    <img className="team-pic" src="images/team/team-ceo.jpg" alt=""></img>
      <Card.Body>
      <Card.Title>Giuseppina Magri</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Founder and CEO</Card.Subtitle>
      <Card.Text>
      Giuseppina Magri is the heart and soul of TwinsMusic, founding the company in 2010 after moving to the US from Italy. As head of the company, her main tasks involve overseeing all management and administrative tasks for artists and employees. She opened a publishing company, TwinsMusic Enterprises Records, to serve as an in-house publisher for TwinsMusic represented artists. Prior to TwinsMusic, she worked many years in the artist touring and booking field, working with artists like Stevie Wonder, Miriam Makaba, and many others.
      </Card.Text>
      <a href="http://linkedin.com/in/giusy-magrì-5a83191a"><img src="images/social/Li-Logo-Team.png" alt=""></img></a>
      </Card.Body>
    </Card>
    <Card style={{backgroundColor:"#12153e"}}>
    <img className="team-pic" src="images/team/team-marketing.jpg" alt=""></img>
      <Card.Body>
      <Card.Title>Carter Brady</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Marketing Video, and Audio Production Associate</Card.Subtitle>
      <Card.Text>
      Carter has been working for TwinsMusic since June 2020, and focuses on managing the marketing outreach and brand strategy of the company. He produces copy for monthly newsletters, develops fresh social media strategies and content to boost click traffic on company platforms, films, edits and produces video content for use on social media and YouTube, and creates custom soundbite cuts to use for the MusMe music catalog.
      </Card.Text>
      <a href="https://www.linkedin.com/company/furman-university/"><img src="images/social/Li-Logo-Team.png" alt=""></img></a>
      </Card.Body>
    </Card>
    <Card style={{backgroundColor:"#12153e"}}>
    <img className="team-pic" src="images/team/team-sales-1.jpeg" alt=""></img>
      <Card.Body>
      <Card.Title>Saniya Joshi</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Sales & Marketing Consultant</Card.Subtitle>
      <Card.Text>
      Saniya Joshi is an alumna of The University of British Columbia and majored in International Economics. She is interning as a Sales & Marketing Consultant at TwinsMusic Enterprises and helping generate targeted and innovative sales and marketing strategies to drive conversions and subscriptions for MusMe’s products and catalogue of sounds. Along with Shelly, she assists in reaching out to connections and potential clients in seek of professional relationships.
      </Card.Text>
      <a href="http://linkedin.com/in/saniya-joshi"><img src="images/social/Li-Logo-Team.png" alt=""></img></a>
      </Card.Body>
    </Card>
    <Card style={{backgroundColor:"#12153e"}}>
    <img className="team-pic" src="images/team/team-sales-2.jpeg" alt=""></img>
      <Card.Body>
      <Card.Title>Shelly Xu</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Sales & Marketing Consultant</Card.Subtitle>
      <Card.Text>
      Shelly Xu is an incoming fourth-year student at the University of British Columbia majoring in International Economics. She joined the team at TwinsMusic as an intern for sales and marketing consultancy. She has been assisting with upgrading the social media platforms and writing monthly newsletters in the last few months. Along with Saniya, she is building a comprehensive website dedicated to the company’s newly launched music app, MusMe.
      </Card.Text>
      <a href="http://linkedin.com/in/shelly-jiayi-xu-0b5227174"><img src="images/social/Li-Logo-Team.png" alt=""></img></a>
      </Card.Body>
    </Card>
    </div>
);

function Team() {
  return (
    <div> 
        {title}
        {content}
      </div>
  );
}

export default Team;
