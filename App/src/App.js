import React from "react";
import "./App.css";
// import HomeView from "./components/HomeView";
// import SearchView from "./components/Search/SearchView";
// import TopScorers from "./components/topScorersView";
import Navbar from "./React-Firebase-Auth-master/src/components/View/sidebar";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from './pages/Home';
// import Reports from './pages/Reports';
// import Products from './pages/Products';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
