import React, {useState, useReducer, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {addUserToStore} from "../State/Actions";

let ReactHook = (props)=>{
    //reading from user reducer using react-redux hook - useSelector
    //below code allows us the access of any store's state here is 
    let user = useSelector((state) => state.user.user); 
    let dispatchUser = useDispatch(); // using this hook to dispatch the addUserToStore action

    let dispatchUserToReducer = ()=>{

        let user = {
            userName: "Alleen",
            password: "xxxxxxx",
            street: "NY-CA",
            mobile: "0070070786"
        }

        alert("This user is going to dispatch : "+ JSON.stringify(user));

        dispatchUser(addUserToStore(user));
    }

    return(
    <div>
        <h1>React Hooks Component</h1>
        <p>User Name : {user.userName}</p>

        <button onClick={dispatchUserToReducer}>Dispatch User To Reducer
        </button>
    </div>
    )
}

export default ReactHook;