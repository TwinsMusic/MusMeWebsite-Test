
import Title from "./Title.js";
import Content from "./Content";
const title = Title("About","Royalty free music library");
const content = Content(
  <div class = "container">
  <body>
    <p>TwinsMusic Enterprises Corporation is a global musical artist management company built on bringing cultural experiences to large and diverse audiences. 
    TwinsMusic organizes music events such as concerts, festivals, and, tours for jazz and gospel artists in the US and Europe. The TwinsMusic team works 
    closely with clients on artist management and working to achieve their professional goals. TwinsMusic also works with artists on releasing and 
    distributing publications and records worldwide. TwinsMusic organizes workshops and seminars in the US, Europe, and China in collaboration with NYC 
    jazz workshops. Stevie Wonder, Miriam Makeba, The Manhattan Transfer, Elvin Jones Jazz Machines, Ray Charles, Robert Plant, Chick Corea, Micheal 
    Petrucciani, The Jazz At Lincoln Center Orchestra with Wynton Marsalis, Monty Alexander, Freddie Hubbard, Benny Golson, Freddy Cole, Regina Carter, and 
    Ravi Coltrane are some of the great artists that TwinsMusic has presented internationally in the last 25 years. Sala Nervi in Vatican City, Rai,
    Mediaset, Teatro Regio di Parma, Carnegie Hall, Lincoln Center, Arena di Verona, Orsara Musica, La Spezia International Jazz Festival, Ravenna Jazz 
    Festival, Ancona Jazz, Ronnie’s Scott,  are some of the institutions TwinsMusic served as artistic consultant/presenter.</p>

    <p>TwinsMusic recently launched an exciting and innovative feature on our online store, MusMe. MusMe is our very own royalty-free music library,  it is an 
    affordable subscription-based music library that features original music, sound bites, ringtones, and sounds effects. MusMe sets itself apart from other
    music libraries because all music in the library is acoustic original music. Each month, the MusMe team updates the library with refreshing new music and
    sounds so users will never run out of new content. Users can pay for yearly or monthly subscriptions through the <a href="https://www.twinsmusicny.com/store.html">TwinsMusic Store</a> </p>

    <p>We appreciate your business and hope you enjoy our exclusive MusMe Music Library!</p>

    <p>If you are looking to license music for a commercial, film, radio, or tv show, please contact our sales representative at <a href="mailto:giusymagri@twinsmusicny.info">giusymagri@twinsmusicny.info</a></p>
  </body>
  </div>
)
function Contact() {
  return (
    <div>
      {title}
      {content}
    </div>
  ); 
}

export default Contact;