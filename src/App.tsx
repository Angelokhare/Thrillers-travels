import React from "react"
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import './style.css';
import HomePage from "./components/Home";




export default function App() {
  return (

    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />

          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<HomePage />} /> 

        {/* {/* </Route> */}
      </Routes>
    </Router>
  );
}

// const root = ReactDOM.createRoot(document.querySelector(".connection"));
// root.render(<App />);

ReactDOM.render(<App />, document.getElementById('root'));