import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Reservas from './views/Reservas';
import Contacto from './views/Contacto';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/reservas" component={Reservas} />
        <Route path="/contacto" component={Contacto} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
