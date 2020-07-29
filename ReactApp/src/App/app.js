import React, {Component, PureComponent} from "react";
import "../App.css";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Footer from "./CommonComponents/FooterComponent";
import Home from "./CommonComponents/HomeComponent";
import Header from "./CommonComponents/HeaderComponent";
import NotFound from "./CommonComponents/NotFoundComponent";
import {About} from "./CommonComponents/AboutComponent";
import User from "./ApplicationComponents/Container/User/UserContainer";
import Product from "./ApplicationComponents/Container/Product/ProductContainer";
import ProductDetails from "./ApplicationComponents/Container/Product/DisplayProductContainer";
import Cart from "./ApplicationComponents/Container/Cart/CartContainer";

//export default class App extends Component{
export default class App extends React.Component{     

    render(){//virtual dom
        let isAdmin = false;//true; // this decision should come from server

        return(
            <Router>
                <Header/>
                <Switch>
                    {/* <Route path="/home" render={()=>
                                (isAdmin == 1 ? (<Redirect to="/about/" />) :(<Home/>))} />          */}
                                
                    <Route path="/home" exact component={Home} />
                    <Route path="/user" exact component={User} />
                    <Route path="/product" exact component={Product} />
                    <Route path="/productdetail" exact component={ProductDetails} />
                    <Route path="/about" exact component={About} />
                    <Route path="/about/:id" component={About} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/" exact component={Home} />
                    <Route path="*" exact component={NotFound} />
                </Switch>
                <Footer/>
            </Router>
        )
    }
}






// old code to refer if needed
// export default class App extends Component{
    
//     constructor(props, context){
//         super(props, context);
        
//         this.state = {
//             timer : 1,
//             name: "Synergisticit",
//             msgForHome : "This Message Must be displayed in home component",
//             sessionName : "MERNStack"
//         }

//         this.globalVariable = "This is a global variable";
//         console.log("constructor")
//         //this.changeState();
//     }

//     getDataFromChild = (childSessionName) => {
//         //alert(childSessionName);

//         this.setState({
//             sessionName:childSessionName
//         })
//     }

//     componentWillMount(){
//         console.log("componentWillMount")
//     }

//     changeState(){
//         setInterval(() => {
//             //console.log("Timer", this.state.timer);

//             this.setState({
//                 timer: this.state.timer + 1                
//             })

//             this.globalVariable = "Changed Value";
//             //console.log(this.globalVariable);
            
//         }, 1000);
        
//         // setInterval(() => { //run this on  browser console to compare the two ways of rendering
//         //     console.log("Timer");
//         //     document.getElementById("name").innerText = "Ashish"
//         // }, 1000);
//     }

//     render(){
        
//             console.log("Parent Render - App Component")
        
//         let displayMessage = "This is the first page of the application";
//         let val1 = 25, val2 = 32;
//         let copyrightMsg = "Copyright To Synergisticit";
//         //JSX : javascript as xml, it is not an html but javascript to generate html and javascript
//         return(
//             <div>
//                 <h1>Welcome to react-  App</h1>
//                 {/* <h1>{displayMessage}</h1>
//                 <b>Added : {val1+val2}</b> 
//                 <b>Exponent : {2**3}</b> 
//                 <br/>
//                 {this.globalVariable}
                
//                 Name : <b id="name">{this.state.name}</b>                
//                 <h1>State Changes : {this.state.timer} : {this.state.timer**2} </h1> */}
//                 <b>{this.state.sessionName}</b>
//                 <hr/>
//                 <Home timer={this.state.timer} sessionName={this.state.sessionName} returnMsg={this.getDataFromChild} />
                
//                 <Footer cpMsg={copyrightMsg} name="Brian">
//                     <div>
//                         <b>Child From Parent App Component 0</b> 
//                         <br/>   
//                         <b>Child From Parent App Component 0.1 </b>    
//                     </div>
//                     <b>Second Child From Parent App Component 1</b>    
//                 </Footer>
                
//             </div>
//         )
//     }
// }  