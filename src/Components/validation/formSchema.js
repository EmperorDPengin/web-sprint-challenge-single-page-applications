import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name is required*')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Size is Required'),
    sauce: yup
        .string()
        .oneOf(['Original Sauce', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'], 'Sauce Type Required'),
    'Pepperoni': yup.bool(),
    'Diced Tomatos': yup.bool(),
    'Sausage': yup.bool(),
    'Black Olives': yup.bool(),
    'Canadian Bacon': yup.bool(),
    'Roasted Garlic': yup.bool(),
    'Spicy Italian Sausage': yup.bool(),
    'Artichoke Hearts': yup.bool(),
    'Grilled Chiken': yup.bool(),
    'Three Cheese': yup.bool(),
    'Onions': yup.bool(),
    'Pineapple': yup.bool(),
    'Green Pepper': yup.bool(),
    'Extra Cheese': yup.bool(),
    substitute: yup.bool(),
    special: yup
        .string()
        .max(20, "less words please"),
    multiplier: yup
        .number()
        .min(1)
        .max(99),
})

export default formSchema;