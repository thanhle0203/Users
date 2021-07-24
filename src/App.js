import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./conmponents/pages/Home";
import About from "./conmponents/pages/About";
import Contact from "./conmponents/pages/Contact";
import Navbar from "./conmponents/layout/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from './conmponents/pages/NotFound';
import AddUser from './conmponents/users/AddUser';
import EditUser from './conmponents/users/EditUser';
import User from './conmponents/users/User';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path ="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />

          <Route component={NotFound} />
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
