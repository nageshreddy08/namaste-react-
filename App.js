import React from "react";
import ReactDOM from "react-dom/client";

const Title=()=>(

    <div>
        <h1>This is Title Component</h1>
    </div>
)

//Component Composition->Calling one component inside another component.
const HeadingComponent=()=>(
    <div>
    <Title />
    <h4>This is Heading Component</h4>
    </div>
)

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)
