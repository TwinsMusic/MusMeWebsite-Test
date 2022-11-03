import React from "react";


//TITLE WRAPPER - pass in the title and subtitle for the page, get a fancy thingy
function Title(name, subtitle) {
  const head =     
    <section class = "hero is-small is-link">
      <div class = "hero-body">
        <div class = "container">
            <h1 class = "title is-1">{name}</h1>
            <h2 class = "subtitle">{subtitle}</h2>
        </div>
      </div>
   </section>
  

  return (head);
}

export default Title;
