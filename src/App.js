import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';

import './App.css';
import schema from './Components/validation/formSchema'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import PizzaForm from './Components/PizzaForm/PizzaForm';
import Help from './Components/Help/Help';

// Initial Values
const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  'Pepperoni': false,
  'Diced Tomatos': false,
  'Sausage': false,
  'Black Olives': false,
  'Canadian Bacon': false,
  'Roasted Garlic': false,
  'Spicy Italian Sausage': false,
  'Artichoke Hearts': false,
  'Grilled Chiken': false,
  'Three Cheese': false,
  'Onions': false,
  'Pineapple': false,
  'Green Pepper': false,
  'Extra Cheese': false,
  substitute: false,
  special: '',
  multiplier: 1
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  multiplier: 1
}

const initialDisabled = false;
const initialUser = {
  orders: []
}


const App = () => {
  // STATES
  const [ user, setUser ] = useState(initialUser);
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ disabled,setDisabled ] = useState(initialDisabled);

  // USER HANDLERS

  // EVENT HANDLERS
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then( () => setFormErrors({...formErrors, [name]: ''}))
      .catch( err => setFormErrors({...formErrors, [name]: err.errors}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    console.log(`The ${name} has changed to ${value}`);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  // EFFECT HANDLERS

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/pizza">
          <PizzaForm
            values={formValues}
            change={inputChange}
            // submit={}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
