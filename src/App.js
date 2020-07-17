import React from 'react';
import { Route, Switch } form 'react-router-dom';
import NavBar from ./components/NavBar;
import HomePage from ./components/HomePage;            
import BurgerForm ./components/BurgerForm;

function App() {
  return (
    <div>
    <NavBar />
    <Switch>
      <Route path='/buildaburger'>
        <BurgerForm />
        </Route>
        </Route exact path='/'>
        <Home Page />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
