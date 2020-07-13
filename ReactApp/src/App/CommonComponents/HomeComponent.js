import React, {Component} from "react";
import {PropTypes} from "prop-types";

export default class Home extends Component{
    
    constructor(props, context){
        super(props, context);
        this.state = {
            msg: props.msg
        }
    }

    render(){
        return(
            <div>
                <i>This is going to be the home</i>
                <br/>
                <i>{this.state.msg}</i>
                <br />
                <i>{this.props.msg}</i>
            </div>
        )
    }
}  

Home.propTypes = {
    msg: PropTypes.string.isRequired
}

Home.defaultProps = {
    msg : "This is the default message, in case value not returned from parent"
}