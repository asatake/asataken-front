import * as React from "react";
import * as ReactDOM from "react-dom";
import Main from "./pages/Main";
import registerServiceWorker from "./registerServiceWorker";
import "./assets/index.scss";

ReactDOM.render(<Main />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
