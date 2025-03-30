import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        
      
        super(props); // ⚠️ No props passed
        
        this.state = {
          userInfo:{
            name:"dummy name",
            location:"dummy location",
          
          }
        }
        // console.log(this.props.name +" constructor");
      }
       async componentDidMount(){
        // console.log(this.props.name +"Child  Component Did mount");
        const data = await fetch("https://api.github.com/users/d-4-deepak")
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
        

      }
    render(){
        // console.log(this.props.name + "child render");
        const{name,location,avatar_url} = this.state.userInfo
       
        
        
        return(
               
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>contact : dg9345@gmil.com</h4>
                <h4>sjdj</h4>
            </div>
        )
    }
}

export default UserClass;