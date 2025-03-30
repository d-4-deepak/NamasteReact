import User from "./User"
import UserClass from "./UserClass"
import React from "react"

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("parent constructor");
        
    }

    componentDidMount(){
        console.log("parent componentDidMount");

    }
        render(){
            console.log("parent render");

    return(
        <div>
            <h1>About us</h1>
            <h2>This is about page</h2>
            {/* <User name="Deepak Gupta(function)"/> */}
            <UserClass name="first " location="Hoshiarpur(class)"/>
            
        </div>
    )
        }
    
}

// const About = ()=>{
    
//     return(
//         <div>
//             <h1>About us</h1>
//             <h2>This is about page</h2>
//             {/* <User name="Deepak Gupta(function)"/> */}
//             <UserClass name="Deepak Gupta(class)" location="Hoshiarpur(class)"/>
//         </div>
//     )
// }
export default About