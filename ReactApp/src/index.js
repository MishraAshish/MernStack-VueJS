import React from "react";
import {render} from "react-dom";

import App from "./App/app";

render(
    <App/>,//The react application
    document.getElementById("root") //rendering react application over root element created in index.html : bootstrapping
)
