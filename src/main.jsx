import React from "react";
import ReactDOM from "react-dom/client"
import "./style.css"
import App from "./App";








const root = ReactDOM.createRoot(document.getElementById("root"))






root.render(  // this is the fragment concept. We warp the calling funtion
  <>                
   <App></App>
  </>
)
