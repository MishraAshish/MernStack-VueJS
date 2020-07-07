import React from "react";
import {render} from "react-dom";

import App from "./App/app";

render(
    <App/>,
    document.getElementById("root") //rendering react application over root element created in index.html : bootstrapping
)
