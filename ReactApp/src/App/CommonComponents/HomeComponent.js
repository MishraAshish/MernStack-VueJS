import React, {Component} from "react";
import {PropTypes} from "prop-types";

export default class Home extends Component{
    
    constructor(props, context){
        super(props, context); // props: are immutable and shared by parent to use
        this.state = { // state : is mutable and remains within the component
            msg: props.msg
        }        
    }

    render(){
        console.log("Render of Home - child component")
        return( //React.Fragment : Holds the criteria to have a top single child in return and also doesnot renders additional div
            <React.Fragment>
                <i>This is going to be the home</i>
                <br/>
                <i>{this.state.msg}</i>
                <br />
                <i>{this.props.msg}</i>
                <br/>
                <b><i>{this.props.timer}</i></b>
            </React.Fragment>
        )
    }
}  

Home.propTypes = {
    msg: PropTypes.string.isRequired
}

Home.defaultProps = {
    msg : "This is the default message, in case value not returned from parent"
}