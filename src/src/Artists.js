import Title from "./Title.js";
import Content from "./Content";
import {Card} from 'react-bootstrap';

const title = Title("Artists","Our Featured Musicians");

const content = Content(
  <section class="section">
    <div class="container">
        <h1 class = "has-text-centered">Artists</h1>
        <Card style={{backgroundColor:"#12153e"}}>
        <img className="artist-pic" src="images/artists/antonio-ciacca.jpg" alt=""></img>
            <Card.Body>
            <Card.Title>Antonio Ciacca</Card.Title>
            <Card.Text>
            Antonio Ciacca is an experienced pianist, composer, and conductor. His work ranges from Classical to Jazz with influences from both European and American traditions, allowing Ciacca to move fluidly among cultural environments. Through his extensive knowledge about Jazz and expert experience working in the Jazz community, Ciacca is a wonderful musician as well as an educator. His compositions for jazz big band, orchestras, movie soundtracks, ballet, chamber ensembles and solo piano have been performed worldwide, including Carnegie Hall, Lincoln Center, Kennedy Center, Teatro Regio of Parma and Vatican Hall. He is currently a doctorate candidate at Stony Brook University and holds a master’s degree at City College of New York and a bachelor’s degree at the Bologna Conservatory in Italy. Notably, Ciacca has served as Artistic Director for the Italian cultural agency, C-Jam, and in 2007, landed a plum job as the Director of Programming for Jazz at Lincoln Center in New York City, the impetus for his move that year from Bologna, Italy to the US. His list of collaborations include Art Farmer, James Moody, Lee Konitz, Jonny Griffin, Dave Liebman, Benny Golson, Steve Lacy, Wynton Marsalis, Nate Brown, among many others.
            </Card.Text>
            </Card.Body>
        </Card>
    </div>
    </section>
);

function Artists() {
  return (
    <div> 
      {title}
      {content}
    </div>
  );
}

export default Artists;
