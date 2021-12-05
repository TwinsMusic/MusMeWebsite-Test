import React, {Fragment} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Accordion} from 'react-bootstrap';

function Faq() {
  return (
    <div class = "is-three-quarters">
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>My Video Received a Copyright Claim By Content ID. What Should I Do?</Accordion.Header>
                <Accordion.Body>
                    No submission on YouTube is safe from being the subject of a false claim or mis-identification.

                ​    Our music is always safe to use, because we own the copyrights to all of the sounds in the library. 
                    We sometimes use samples in our audio files which are also used by other composers and producers.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What Do You Do if You Receive This Claim?</Accordion.Header>
                <Accordion.Body>
                    Because YouTube’s Content ID system does not register that we gave you the license to use the music, you will need to dispute the claim in order to monetize.

                    In order to dispute, you must:

                    1. Click on the video side bar where it says “Copyright Claim”

                    2. Click on the dropdown option that says “File a Dispute”

                    3. Follow the directions in the submission and select “I have a license or written permission from the proper rights holder to use this material.”
                    ​
                    3. In the Proof of Ownership description section, write “The audio files are licensed and approved by TwinsMusic Enterprises.”
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Royalty Free vs. Copyright</Accordion.Header>
                <Accordion.Body>
                    So what makes royalty-free music “royalty-free?”

                    Royalty free means that someone who purchases a license for a musical work does not need to own the copyright or pay royalties each time the licensee wants to use that musical work. Copyright free, on the other hand, means that the copyright for that musical work has expired and is therefore in the public domain. 
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>What is a Royalty?</Accordion.Header>
                <Accordion.Body>
                    A royalty is a monetary request payment made from the copyright holder each time a musical work is used. A royalty is negotiated by the copyright holder, however the ownership of the master recording of a musical work always stays in the hands of the artist or publishing company. In all cases, individuals are able to use the musical work they paid for without changing or modifying the works. 
​
                    Once again, royalty free means that the licensee does not need to pay or negotiate further payments to use the work, but this does not mean that they own the copyright to the work. 
                    <figure class="image is-32x32">
                    <img src = "Copyright-img.png"></img>
                    </figure>
                    In order to obtain a royalty free license, they need to subscribe to a music library such as MusMe. While royalty free music is meant to allow content creators to be able to monetize their work on digital platforms like YouTube, they CANNOT claim ownership of the musical work or resell, trade, or exploit for profit to other licensees or companies such as ad agencies for commercial purposes. If the licensee would like to use their work for that purpose, they can obtain from us a different type of sync license agreement.    
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>7 Steps to Set Up Your MusMe Ringtones</Accordion.Header>
                <Accordion.Body>
                    lots of pics and steps ugh
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
  );
}

export default Faq;
