import { Product, taxCalculation } from './06-function-destructuring';


const shoppingCart: Product[] = [
    {
        description: 'MacBook Pro 16"',
        price: 2499.99
    },
    {
        description: 'Apple Watch Series 7',
        price: 399.99
    }
];


const [ total, tax ] = taxCalculation({
    tax: 0.15,
    products: shoppingCart
});

console.log('Total: ', total);
console.log('Tax: ', tax);