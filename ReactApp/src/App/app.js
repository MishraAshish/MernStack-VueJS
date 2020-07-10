import React, {Component, PureComponent} from "react";
import Footer from "./CommonComponents/FooterComponent";
import Home from "./CommonComponents/HomeComponent";


export default class App extends Component{
    
    constructor(props, context){
        super(props, context);
        
        this.state = {
            timer : 1,
            name: "Synergisticit"
        }

        this.globalVariable = "This is a global variable";
        this.changeState();
    }

    changeState(){
        setInterval(() => {
            console.log("Timer", this.state.timer);

            this.setState({
                timer: this.state.timer + 1
            })

            this.globalVariable = "Changed Value";
            console.log(this.globalVariable);
            
        }, 1000);
        
        // setInterval(() => { //run this on  browser console to compare the two ways of rendering
        //     console.log("Timer");
        //     document.getElementById("name").innerText = "Ashish"
        // }, 1000);
    }

    render(){
        let displayMessage = "This is the first page of the application";
        let val1 = 25, val2 = 32;
        let copyrightMsg = "Copyright To Synergisticit";
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
                <Home />
                
                <Footer cpMsg={copyrightMsg} name="Brian">
                    <div>
                        <b>Child From Parent App Component 0</b> 
                        <br/>   
                        <b>Child From Parent App Component 0.1 </b>    
                    </div>
                    <b>Second Child From Parent App Component 1</b>    
                </Footer>
                
            </div>
        )
    }
}  