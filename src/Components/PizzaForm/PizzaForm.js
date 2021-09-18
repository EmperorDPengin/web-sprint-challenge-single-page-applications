import React from 'react';

import './PizzaForm.css';
import SizeSelector, { SauceSelector, ToppingSelector, SubstituteSelector, SpecialIntructionCreator }from './Ingredients/Ingredients';

function PizzaForm(props) {
    const {
        values,
        change,
        submit,
        disabled,
        errors
    } = props;

    // EVENT HANDLERS
    const onChange = evt => {
        const { name, value, checked, type} = evt.target;
        console.log(evt.target);
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form id="pizza-form" className="pizza-form">
            <div className="pizza-banner"></div>



                <div className="form-groups">
                    <h2>Build Your Own Pizza</h2>

                    <div className='inputs'>
                        <div className='input'>
                            <div className='banner'>
                                 <label>
                                    <h4>Order Name</h4>
                                    <p>required</p>
                                    { errors.name &&  (
                                        <p className='error-text'>{errors.name}</p>
                                    )}
                                </label>
                            </div>
                            <div className='endpoint'>
                                <input
                                    id= 'name-input' 
                                    name= 'name'
                                    type= 'text'
                                    value= {values.name}
                                    onChange= {onChange}
                                />
                            </div>
                        </div>
                
                        {/* SIZE INPUT DROP DOWN */}
                        <SizeSelector value={values.size} change={onChange} error={errors.size} key="size-select"/>

                        {/* SAUCE INPUT RADIAL SELECT ONE */}
                        <SauceSelector value={values.sauce} change={onChange} error={errors.sauce} key="sauce-select"/>

                        {/* TOPPINGS INPUT CHECKLIST */}
                        <ToppingSelector value={values} change={onChange} key="topping-select"/>

                        {/* SUBSTITUTE SELECTOR TOGGLE SWITCH*/}
                        <SubstituteSelector value={values.substitute} change={onChange} errors={errors.substitute} key="substitute-selector"/>

                        {/* SPECIAL INTRUCTIONS TEXT INPUT BOX */}
                        <SpecialIntructionCreator value={values.special} change={onChange}/>

                        <hr />

                        <div className='input endpoint'>
                            <div className='number-modifier'>
                                <input 
                                    name= 'multiplier'
                                    type= 'number'
                                    min= '1'
                                    value={values.multiplier}
                                    max= '99'
                                    step= '1'
                                    onChange={onChange}
                                />
                            </div>
                            <div className="submit">
                                <button disabled={disabled}>
                                    Submit Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </form>
    )
}

export default PizzaForm;