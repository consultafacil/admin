import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/medico" className="navbar-brand">
            Consulta Fácil
          </a>
          <div className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <Link to={"/medico"} className="nav-link">
                Listagens
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Adicionar Médico
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>Consulta Fácil - CRUD</h2>
          <Switch>
            <Route exact path={["/", "/medico"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
