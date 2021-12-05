import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Artists from './Artists';
import Browse from './Browse';
import Cart from './Cart';
import Faq from './Faq';
import Submit from './Submit';
import Subscribe from './Subscribe';
import Team from './Team';


import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(

  <BrowserRouter>
    {/* Header will always be present. <Switch> section changes out content based on the URL*/}

      <Header />

    <div class = "content">
    <Switch>
        {/* 
        "Route" items change based on the url. Ex: if you are on /about, the page loads the About component in About.js
  */}
      <Route exact path="/" component = {Home}/>
      <Route exact path="/about" component = {About}/>
      <Route exact path = "/team" component = {Team}/>
      <Route exact path = "/artists" component = {Artists}/>
      <Route exact path = "/subscribe" component = {Subscribe}/>
      <Route exact path = "/browse" component = {Browse}/>
      <Route exact path = "/artist-submit" component = {Submit}/>
      <Route exact path = "/faq" component = {Faq}/>
      <Route exact path = "/cart" component = {Cart}/>
    {/* ADD OTHER PATHS FOR OTHER PAGES which have links in Header.js*/}
    </Switch>
    </div>
    <Footer />
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

