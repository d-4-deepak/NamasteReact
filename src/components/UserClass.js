import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        
      
        super(props); // ⚠️ No props passed
        
        this.state = {
            count: 0,
            count2:0
        }
        console.log(this.props.name +" constructor");
      }
      componentDidMount(){
        console.log(this.props.name +"Child  Component Did mount");
      }
    render(){
        console.log(this.props.name + "child render");
        const{name,location} = this.props
        const {count} = this.state;
        
        return(
               
            <div className="user-card">
                <h2>Count : {count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                   
                    })
                    // this.setState((prevState) => ({ count: prevState.count + 1 }));
                   
                }} >Click me</button>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>contact : dg9345@gmil.com</h4>
                <h4>sjdj</h4>
            </div>
        )
    }
}

export default UserClass;