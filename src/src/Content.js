import React from "react";


//CONTENT WRAPPER
//pass in JSX for inner webpage content. it should format it as 
function Content(c) {
    const content = <section class = "content">
        <div>
            <div class = "columns p-6">
                <div class = "column">
                    </div>
                <div class = "column is-four-fifths">
                {c}
                </div>
                <div class = "column">
                    </div>
            </div>
        </div>
    </section>

    return(content)
}


export default Content;