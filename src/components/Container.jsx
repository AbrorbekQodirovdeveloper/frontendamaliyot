import { Component } from "react";
import './container.css';




class Container extends Component {
   constructor(props) {
     super();
   }
   render(){
     return (
        <div className="container">
   {
        this.props.children
   }
        </div>

     )
   }
}

 export default  Container;