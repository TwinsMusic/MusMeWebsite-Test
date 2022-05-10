import {React, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Artists from './Artists';
import Browse from './Browse';
import Contact from './Contact';
import Faq from './Faq';
import Submit from './Submit';
import Subscribe from './Subscribe';
import Team from './Team';
import Terms from './Terms';
import Test from './Test';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
// browse
import Moods from './Moods';
import Ringtones from './Ringtones';
import SoundEffects from './SoundEffects';
// moods
import CalmMood from './CalmMood';
import ClassicMood from './ClassicMood';
import DreamyMood from './DreamyMood';
import EpicMood from './EpicMood';
import HappyMood from './HappyMood';
import InspirationalMood from './InspirationalMood';
import JazzyMood from './JazzyMood';
import SuspensefulMood from './SuspensefulMood';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.render(
<div>


  <BrowserRouter>
  <ScrollToTop/>
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
      <Route exact path = "/terms" component = {Terms}/>
      <Route exact path = "/contact" component = {Contact}/>
      <Route exact path = "/test" component = {Test}/>
      <Route exact path = "/terms" component = {Terms}/>
      <Route exact path = "/admin" component = {Login}/>
      <Route exact path = "/signup" component = {SignUp}/>
      <Route exact path = "/forgotpassword" component = {ForgotPassword}/>
      <Route exact path = "/resetpassword" component = {ResetPassword}/>
      <Route path='/resetpassword/:token'>
        <ResetPassword />
      </Route>
      {/* ADD OTHER PATHS FOR OTHER PAGES which have links in Header.js*/}
      <Route exact path = "/ringtones" component = {Ringtones}/>
      <Route exact path = "/soundeffects" component = {SoundEffects}/>
      <Route exact path = "/moods" component = {Moods}/>
      <Route exact path = "/calmmood" component = {CalmMood}/>
      <Route exact path = "/classicmood" component = {ClassicMood}/>
      <Route exact path = "/happymood" component = {HappyMood}/>
      <Route exact path = "/dreamymood" component = {DreamyMood}/>
      <Route exact path = "/epicmood" component = {EpicMood}/>
      <Route exact path = "/dreamymood" component = {DreamyMood}/>
      <Route exact path = "/inspirationalmood" component = {InspirationalMood}/>
      <Route exact path = "/jazzymood" component = {JazzyMood}/>
      <Route exact path = "/suspensefulmood" component = {SuspensefulMood}/>
    {/* ADD OTHER PATHS FOR OTHER PAGES which have links in Header.js*/}
    </Switch>
    </div>
    <ScrollToTop />    
    <Footer />
    
  </BrowserRouter>
  </div>,


  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

