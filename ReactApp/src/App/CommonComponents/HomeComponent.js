import React, {Component} from "react";

export default class Home extends Component{
    
    constructor(props, context){
        super(props, context);
        this.state = {
            date : new Date()
        }

        this.changeState();
    }

    changeState(){
        setInterval(() => {
            this.setState({
                date : new Date()
            })
        }, 1000);
    }

    render(){
        return(
            <div>
                <i>This is going to be the home</i>
                <br/>
                <i>{this.state.date.toISOString()}</i>
            </div>
        )
    }
}  