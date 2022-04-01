import React from "react";
import Title from "./Title.js";
import Content from "./Content";

const title = Title("Terms of Use","Read before subscribing");

const content = Content(
    <section class="section" style = {{color: "white"}}>
    <div class="container has-text is-size-5">
        <h4><b>ANNUAL SUBSCRIPTION AGREEMENT</b></h4>
        <p>What You Get From Our MusMe Subscription<br></br>
        The moment you subscribe with TwinsMusic, you are agreeing with the following terms and conditions.
        </p>
        <h4><b>GUARANTEE</b></h4>
        <p >TwinsMusic Enterprises (TME) guarantees that it owns and/or controls the rights represented herein with respect to the recordings and the musical compositions in the Work and has and will hold throughout the TERRITORY and during the DURATION of the subscription period, and above listed rights to exploit the Work as contemplated herein.</p>
        <h4><b>TERMS OF USE (explained)</b></h4>
        <p>All audio files are royalty-free. This means that there are no additional fees owed for small content creators like YouTubers, film students, personal videos, small business owners. Once you have downloaded the audio file, you have the license to use that sound in the year of the subscription period as many times as you want, and you will never be required to pay another fee of any kind. However, the audio files in the library are not allowed to be used for commercial use, video games, film, advertising, and any other commercial production. For this kind of purpose, you can grant a specific license from TwinsMusic Enterprises.</p>
        <h4><b>RIGHTS NOT INCLUDED IN THIS AGREEMENT</b></h4>
        <p>The rights granted to the subscriber do not permit the subscriber to (1) claim authorship of the music represented under this AGREEMENT; (2) transfer, share or sub-lease this license agreement with any other party; (3) copy or duplicate the Work except for the granted use in the terms of use; (4) permit any other individual or third party the right to use the Work in place of the subscriber; (5) resell, trade, or exploit for profit the Work contained herein outright or as part of other music and/or audio-related collections, in part or in whole, to any other individual or party.</p>
        <p>Audio files cannot be used, copied, resold or distributed as individual files.</p>
        <h5>You may use the tracks, samples and loops in</h5>
        <ul>
            <li>individual videos (YouTube, Vimeo, social media platforms)</li>
            <li>podcasts</li>
            <li>demos</li>
            <li>school projects</li>
            <li>any other type of audio/visual project</li>
        </ul>
        <h5>You may NOT use the tracks, samples and loops in</h5>
        <ul>
            <li>films</li>
            <li>games</li>
            <li>apps</li>
            <li>concert performances</li>
            <li>TV or radio advertisements</li>
            <li>software</li>
            <li>commercial musical works or in other songs (pop songs etc.) based on our audio files (derivative work)</li>
        </ul>
        <h4>The viewing, printing or downloading of any content from the website can only be used for private use and not for commercial purposes (for purchased or free downloaded sounds, please see the terms of use above).</h4>
   </div>
    </section>
);

function Terms() {
    return (
        <div> 
            {title}
            {content}
        </div>
    );
}

export default Terms;