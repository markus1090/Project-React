import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Book from "./pages/Book"
import Error from "./pages/Error"
import NavBar from "./components/Navbar"

function App() {
  return (
  <Router>
    <NavBar />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/about">
          <About />
        </Route>
        <Route path = "/book/:id">
          <Book />
        </Route>
        <Route path = "*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
