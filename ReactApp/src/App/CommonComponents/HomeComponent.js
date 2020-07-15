import React, {Component} from "react";
import {PropTypes} from "prop-types";

export default class Home extends Component{
    
    //creation life cycle methods
    constructor(props, context){
        super(props, context); // props: are immutable and shared by parent to use
        this.state = { // state : is mutable and remains within the component
            msg: props.msg, // We are copying the props to state variable coming from parent
            sessionName: props.sessionName,
            inputValue: "Initial Value"
        }                
    }

    componentWillMount(){
        console.log("componentWillMount")
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    //component will unmount
    componentWillUnmount(){
        console.log("componentDidMount")
    }

    changeSessionName = () => {
        //setState - this API accepts the update state and re-renders along with lifecycle methods
        this.setState({
            sessionName: "React"
        },
            ()=>{
                console.log("Session Has been updated")
            }
        )

        // below way must be avoided
        //this.state.sessionName = "Angular";
        //this.forceUpdate();// calls render method directly without going to should component update
        //forceUpdate - this should be avoided, it skips life cycle methods of component
    }

    readUserInput = (evt) => {//evt : belongs to the html element raising the event in our case its input box        
        let targetValue = evt.target.value; //javascripts basic way
        console.log("There are changes in input box", evt.target)

        //if (isNaN(targetValue) || targetValue == "") {
            this.setState({
                inputValue: targetValue
            })    
        //}        
    }

    //Update LifeCyle
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps -", nextProps);
    }

    //life cycle method
    shouldComponentUpdate(nextProps, nextState){
        // console.log("shouldComponentUpdate -");
        // console.log("nextProps -", nextProps );
        // console.log("nextState -", nextState);
        // if (nextState.sessionName !== this.state.sessionName || nextProps.sessionName !== this.props.sessionName) {
        //     return true; //go and call the render
        // }else
        //     return false; // do not call the render
        return true;
    }

    render(){
        console.log("Render of Home - child component")
        return( //React.Fragment : Holds the criteria to have a top single child in return and also doesnot renders additional div
            <React.Fragment>
                <h1><i>This is going to be the Home</i></h1>
                <br/>
                {/* <i>{this.state.msg}</i>
                <br />
                <i>{this.props.msg}</i>
                <br/> */}
                <b><i>{this.props.timer}</i></b>
                <br/>
                <b><i>Session Name From Props = {this.props.sessionName}</i></b>
                <br/>
                <b><i>Session Name From State = {this.state.sessionName}</i></b>
                <button onClick={this.changeSessionName}>Change Session Name</button>  
                <br/>
                <button onClick={() => this.props.returnMsg(this.state.inputValue)}>Send Back To Parent</button>  
                
                <br/>                
                <input type="text" placeholder="Please provide your input" value={this.state.inputValue} onChange={this.readUserInput}/>

                <b>{this.state.inputValue}</b>

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