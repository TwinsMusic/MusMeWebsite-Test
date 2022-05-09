
import Title from "./Title.js";
import Content from "./Content";
const title = Title("About","Royalty free music library");
const content = Content(
  <div class = "container">
  <div class = "row">
    <div class ="col">
    <b style={{color: "white"}}>Name</b>  
    </div>
  </div>
  <div class = "row">
    <div class ="col">
      <label style={{color: "white"}}><b>First</b></label> <br></br>
      <input type = "text" id = "fname" size = "55"></input>
    </div>
    <div class ="col">
      <label style={{color: "white"}}><b>Last</b></label> <br></br>
      <input type = "text" id = "lname" size= "55"></input>
    </div>
    <div class = "row">
      <div class ="col">
      <br></br>
      <b style={{color: "white"}}>Email</b>  
      </div>
    </div>
    <div class = "row">
      <div class ="col">
        <input type = "text" id = "email" size="121"></input>
      </div>
    </div>
    <div class = "row">
      <div class ="col">
        <br></br>
        <label style={{color: "white"}}><b>Music is for?</b></label><br></br>
        <input type = "radio" id = "commercial" name="use"></input><l style={{color: "white"}} > Commercial Use</l><br></br>
        <input type = "radio" id = "education" name="use"></input><l style={{color: "white"}}> Education Use</l><br></br>
        <input type = "radio" id = "personal" name="use"></input><l style={{color: "white"}}> Personal Use</l><br></br>
      </div>
    </div>
    <div class = "row">
      <div class ="col">
        <br></br>
        <label style={{color: "white"}}><b>Instrument Type (eg: piano, vocal, etc)</b></label> <br></br>
        <input type = "text" id = "insttype"  size="121"></input>
      </div>
    </div>
    <div class = "row">
      <div class = "col">
        <br></br>
        <label style={{color: "white"}}><b>Music Type</b></label><br></br>
        <select>
          <option value="">Jazz</option>
          <option value="">Classical</option>
          <option value="">Orchestral</option>
          <option value="">Pop</option>
          <option value="">World</option>
          <option value="">Folk</option>
          <option value="">Other</option>
        </select>
      </div>
    </div>
    <div class = "row">
      <div class = "col">
        <br></br>
        <label style={{color: "white"}}><b>Occasion/Platform</b></label><br></br>
        <select>
          <option value="">TV Commercial</option>
          <option value="">Wedding</option>
          <option value="">Student Film</option>
          <option value="">YouTube</option>
          <option value="">Others</option>
        </select>
      </div>
    </div>
    <div class = "row">
      <div class ="col">
        <br></br>
        <label style={{color: "white"}}><b>What else would you like us to know?</b></label><br></br>
        <textarea rows = "5" cols = "121" name = "description">
            Enter details here...
         </textarea><br></br>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <br></br>
        <button type="button" class="btn btn-primary"> Submit</button>
      </div>
    </div>
  </div>
  
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