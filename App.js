import React from "react";
import ReactDOM from "react-dom/client"


// const heading = React.createElement("h1",{id:"h1"},"Namasate React");

const jsxHeading = <h1 id="h1">Namaste React JS</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

const reactEle = <h2>The react Element is  stored in JS variable in the end of the day</h2>

const Title = ()=>(
    <h1 className="head" tabIndex="5">
        Namaste React Using JSx
    </h1>
)

const HeadingComponent = ()=>(
    <div>
        <Title/>
        {reactEle}
        <h1>This is Functional Component</h1>
    </div>
)

root.render(<HeadingComponent/>);