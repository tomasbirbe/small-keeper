import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GlobalStyleProvider from "./providers/GlobalStyles";

ReactDOM.render(
  <GlobalStyleProvider>
    <App />
  </GlobalStyleProvider>,
  document.getElementById("root"),
);
