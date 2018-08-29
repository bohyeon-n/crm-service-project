import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "rc-time-picker/assets/index.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.less";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
