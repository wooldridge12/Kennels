//PART 2
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { Kennel } from "./components/Kennel"
// import './index.css';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    {/* Put in Router also dont forget to import it */}
    <Router>
    <Kennel />
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




//how to run this !!!
//cd workspace cd kennel-api
//json-server -p 8088 database.json
//then
// new terminal cd workspace
//cd kennels
//code .
//npm start