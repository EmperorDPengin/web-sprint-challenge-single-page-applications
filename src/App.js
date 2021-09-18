import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

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
const initialOrders = [];


const App = () => {
  // STATES
  const [ orders, setOrders ] = useState(initialOrders);
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ disabled,setDisabled ] = useState(initialDisabled);

  // ORDER HANDLERS

  const postNewOrder = newOrder => {
    
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        console.log(newOrder);
        setOrders([res.data, ...orders]);
        setFormValues(initialFormValues);
      }).catch(err => {
        console.error(err);
        setFormValues(initialFormValues);
      })
  }

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

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: [
        'Pepperoni',
        'Diced Tomatos',
        'Sausage',
        'Black Olives',
        'Canadian Bacon',
        'Spicy Italian Sausage',
        'Artichoke Hearts',
        'Grilled Chiken',
        'Three Cheese',
        'Onions',
        'Pineapple',
        'Green Pepper',
        'Extra Cheese',
      ].filter( topping => !!formValues[topping]),
      substitute: formValues.substitute,
      special: formValues.special,
      multiplier: formValues.multiplier,
    }

    postNewOrder(newOrder);
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
            submit={formSubmit}
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
