import React from "react";
import {Accordion} from 'react-bootstrap';
import Title from "./Title.js";
import Content from "./Content";

//import "./Faq.css";

const title = Title("FAQs","Frequently asked questions");

const answerStyle = {
  backgroundColor:"#12153e",
  color:"white"
}

const content = Content(
<div class="container">
<Accordion>
  <Accordion.Item style={answerStyle} eventKey="0">
    <Accordion.Header><b>What Do You Do if You Receive This Claim?</b></Accordion.Header>
    <Accordion.Body>
    <p>Because YouTube’s Content ID system does not register that we gave you the license to use the music, you will need to dispute the claim in order to monetize.</p>
    <p>In order to dispute, you must:</p>
    <p>1. Click on the video side bar where it says “Copyright Claim”</p>
    <p>2. Click on the dropdown option that says “File a Dispute”</p>
    <p>3. Follow the directions in the submission and select “I have a license or written permission from the proper rights holder to use this material.”</p>
    <p>4. In the Proof of Ownership description section, write “The audio files are licensed and approved by TwinsMusic Enterprises.”</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item style={answerStyle} eventKey="1">
    <Accordion.Header><b>​My Video Received a Copyright Claim By Content ID. What Should I Do?</b></Accordion.Header>
    <Accordion.Body>
    <p>No submission on YouTube is safe from being the subject of a false claim or mis-identification.</p>
    <p>Our music is always safe to use, because we own the copyrights to all of the sounds in the library. We sometimes use samples in our audio files which are also used by other composers and producers.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item style={answerStyle} eventKey="2">
    <Accordion.Header><b>Royalty Free vs Copyright</b></Accordion.Header>
    <Accordion.Body>
      <p>So what makes royalty-free music “royalty-free?”</p>
      <p><b>Royalty free</b> means that someone who purchases a license for a musical work does not need to own the <b>copyright</b> or pay <b>royalties</b> each time the licensee wants to use that musical work. <b>Copyright free</b>, on the other hand, means that the <b>copyright</b> for that musical work has expired and is therefore in the public domain.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item style={answerStyle} eventKey="3">
    <Accordion.Header><b>What is a Royalty?</b></Accordion.Header>
    <Accordion.Body>
      <p>A royalty is a monetary request payment made from the copyright holder each time a musical work is used. A royalty is negotiated by the copyright holder, however the ownership of the master recording of a musical work always stays in the hands of the artist or publishing company. In all cases, individuals are able to use the musical work they paid for without changing or modifying the works.</p>
​
      <p>Once again, royalty free means that the licensee does not need to pay or negotiate further payments to use the work, but this does not mean that they own the copyright to the work.</p>
      <p><img src = "images/faq/Copyright-img.png"></img></p>
      <p>In order to obtain a royalty free license, they need to subscribe to a music library such as MusMe. While royalty free music is meant to allow content creators to be able to monetize their work on digital platforms like YouTube, they CANNOT claim ownership of the musical work or resell, trade, or exploit for profit to other licensees or companies such as ad agencies for commercial purposes. If the licensee would like to use their work for that purpose, they can obtain from us a different type of sync license agreement.</p>
    </Accordion.Body>
</Accordion.Item>
  <Accordion.Item style={answerStyle} eventKey="4">
    <Accordion.Header><b>7 Steps to Set Up Your MusMe Ringtones</b></Accordion.Header>
    <Accordion.Body>
      <p><b>Step 1:</b><br></br>
      Starting on your computer, click on this link <a href="https://song.space/4w7xzh">(https://song.space/4w7xzh)</a> where all of our ringtones have been organized.</p>
      <p><img src="7step-step1.png" alt=""></img></p>
      <p><b>Step 2:</b><br></br>
      Select the ringtone that you would like to use and click the Arrow icon to the right of the ringtone file. This will take you to a screen that gives you the option to download your ringtone. We suggest that you download each of these ringtones individually. Make sure to select “Download original file.” Each of these ringtone files are already in M4R format, the necessary format in order for the ringtone to be able to sync to your iPhone.</p>
      <p><img src="7step-step2.png" alt=""></img></p>
      <p><b>Step 3:</b><br></br>
      Once downloaded, you should soon see the ringtone file pop up under “Downloads” on your computer. Once you identify where the file is, drag the file into your screensaver region known as “Desktop.” We advise that you create a folder on your computer titled “Ringtones” so that every month you can fill it with our new ringtones.</p>
      <p><img src="images/faq/7step-step3-1.png" alt=""></img></p>
      <p><img src="images/faq/7step-step3-2.png" alt=""></img></p>
      <p><b>Step 4:</b><br></br>
      Open your Music Application on your computer, and then, using a lightning-to-USB adapter, plug your iPhone into your computer. Once your iPhone shows up on the left-hand side of your music library, click on that.</p>
      <p><img src="images/faq/7step-step4.png" alt=""></img></p>
      <p><b>Step 5:</b><br></br>
      Once there, click on the “Sync Settings” icon in the top right corner of the page. This will take you to a new page. Then click on the “General” icon in the menu bar. There should be a check box that’s labeled “Manually manage music, movies, and TV shows.” Make sure that box is checked off, and that the “Automatically sync when this iPhone is connected” box is unchecked.</p>
      <p><img src="images/faq/7step-step5-1.png" alt=""></img></p>
      <p><img src="images/faq/7step-step5-2.png" alt=""></img></p>
      <p><img src="images/faq/7step-step5-3.png" alt=""></img></p>
      <p><b>Step 6:</b><br></br>
      Drag the ringtone into the general field of the iPhone sync page, which will show up with a green “+” icon next to the file before releasing the mouse. This will place your new ringtone onto your iPhone.</p>
      <p><img src="images/faq/7step-step6.png" alt=""></img></p>
      <p><b>Step 7:</b><br></br>
      Lastly, open your phone and go to “Settings,” then go to “Sounds and Haptics” where you will see a place that says “Ringtones.” Once you click on that, you should then be able to see your recently imported ringtone at the very top of the page, along with the rest of the Apple default ringtones. You can then repeat these steps for the next set of ringtones you decide to import.</p>
      <p><img src="images/faq/7step-step7.png" alt=""></img></p>
      <p><b>We hope that the short tutorial is helpful and contact us with any further questions.</b></p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</div>
);

function Faq() {
  return (
      <div> 
          {title}
          {content}
        </div>
  );
}

export default Faq;
