import React, {Component, PureComponent} from "react";
import Footer from "./CommonComponents/FooterComponent";


export default class App extends Component{
    
    constructor(props, context){
        super(props, context);
        
        this.state = {
            timer : 1,
            name: "Ashish"
        }
        this.globalVariable = "This is a global variable";
        this.changeState();
    }

    changeState(){
        setInterval(() => {
            console.log("Timer");
            this.setState({
                timer:this.state.timer + 1
            })
        }, 1000);

        // setInterval(() => { //run this on  browser console to compare the two ways of rendering
        //     console.log("Timer");
        //     document.getElementById("name").innerText = "Ashish"
        // }, 1000);
    }

    render(){
        let displayMessage = "This is the first page of the application";
        let val1 = 25, val2 = 32;
        //JSX : javascript as xml, it is not an html but javascript to generate html and javascript
        return(
            <div>
                <h1>Welcome to react</h1>
                <h1>{displayMessage}</h1>
                <b>Added : {val1+val2}</b> 
                <b>Exponent : {2**3}</b> 
                <br/>
                {this.globalVariable}
                <hr/>
                Name : <b id="name">{this.state.name}</b>                
                <h1>State Changes : {this.state.timer} : {this.state.timer**2} </h1>
                <Footer/>
            </div>
        )
    }
}  