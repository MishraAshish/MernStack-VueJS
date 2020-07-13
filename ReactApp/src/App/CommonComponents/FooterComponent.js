import React from "react"; //Reads React.CreateElement... for converted JSX by @react.presets (babel transpiler)

//functional component written in Arrow Format
let Footer = (props, context)=>{
    return(
        <React.Fragment>
            <hr/>
            <h1>{props.cpMsg}</h1>
            <h1>{props.name}</h1>
            <br/>
            {props.children[0]}
            <br/>
            {props.children[1]}
            
        </React.Fragment>
    )
}

export default Footer;

// //functional component written normal
// export function Header(params) {
//     return(
//         <div>
//             <hr/>
//             <h1>This is a Header component</h1>
//         </div>
//     )
// }