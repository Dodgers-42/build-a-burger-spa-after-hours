import React from 'react';
import { Route, Switch } form 'react-router-dom';
import NavBar from ./Components/NavBar;
import HomePage from ./Components/HomePage;            
import BurgerForm from ./Components/BurgerForm;

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
