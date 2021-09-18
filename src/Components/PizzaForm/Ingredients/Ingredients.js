import React from 'react';

const sizes = [
    'small',
    'medium',
    'large'
]

const sauces = [
    'Original Sauce',
    'Garlic Ranch',
    'BBQ Sauce',
    'Spinach Alfredo'
]

const toppings = [
    'Pepperoni',
    'Diced Tomatos',
    'Sausage',
    'Black Olives',
    'Canadian Bacon',
    'Roasted Garlic',
    'Spicy Italian Sausage',
    'Artichoke Hearts',
    'Grilled Chiken',
    'Three Cheese',
    'Onions',
    'Pineapple',
    'Green Pepper',
    'Extra Cheese'
]


export function SizeSelector(props){
    const { value, change, error } = props;
    return (
            <div className='input'>
                <div className='banner'>
                    <label>
                        <h4>Choice of Size</h4>
                        <p>required</p>
                        { 
                            error &&  (
                            <p className='error-text'>{error}</p>
                        )}
                    </label>
                </div>
                <select
                    name='size' 
                    onChange={change}
                    value={value}   
                >
                    <option value= ''>Select a Size</option>
                    { sizes.map( size => {
                            const sizeString = size.toString();
                            const sizeStringUp = sizeString.charAt(0).toUpperCase() + sizeString.slice(1); 
                            return(
                                <option key={size} value={size}>{sizeStringUp}</option>
                            )
                        })
                    }
                </select>
            </div>
    )
}

export function SauceSelector(props){
    const { value, change, error } = props;

    return (
        <div className="input">
            <div className="banner">
                <label>
                    <h4>Choose Sauce</h4>
                    <p>required</p>
                    { 
                        error &&  (
                        <p className='error-text'>{error}</p>
                    )
                    }
                </label>
            </div>
            <div className="radials container">
                {
                    sauces.map( sauce => {
                        return (
                            <label key={sauce}>
                                <input 
                                    name='sauce'
                                    type='radio'
                                    value={sauce}
                                    onChange={change}
                                    checked={value === sauce}
                                />
                            {sauce}
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}

export function ToppingSelector(props) {
    const { value, change} = props;

    return (
        <div className='input'>
            <div className='banner'>
                <label>
                    <h4>Add Topings</h4>
                    <p>Choose up to 10</p>
                </label>
            </div>
            <div className="checks">
                {
                    toppings.map( topping => {
                        return (
                            <label key={topping}>
                                <input 
                                    type="checkbox"
                                    name={topping}
                                    class="larger"
                                    checked={value[topping]}
                                    onChange={change}
                                />
                            <p>{topping}</p>
                            </label>
                        )
                    })
                }             
            </div>
        </div>
    )
}

export function SubstituteSelector(props) {
    const { value, change} = props;
    return (
        <div className='input'>
            <div className='banner'>
                <label>
                    <h4>Choice of Substitute</h4>
                    <p>Choose up to 1</p>
                </label>
            </div>
            <div className="container-horizontal">
                
                <div>
                    <label class="switch">
                       <input
                            name= 'substitute'
                            type="checkbox"
                            checked={value}
                            onChange={change}
                       />
                       <span class="slider"></span>
                    </label>
                    <p>Glunten Free Crust (+ $100.00)</p>
                </div>
                            
            </div>
        </div>
    )
}


export function SpecialIntructionCreator(props) {
    const { value, change} = props;
    
    return (
        <div className='input'>
            <div className='banner'>
                <label>
                    <h4>Special Instructions</h4>
                </label>
            </div>
            <div className="container-horizontal">
                <input
                    name='special'
                    type= 'text'
                    value={value}
                    onChange={change}
                    className="userinput"
                    placeholder="Anything else you'd Like to add?"      
                />      
            </div>
        </div>
    )
}
export default SizeSelector;

