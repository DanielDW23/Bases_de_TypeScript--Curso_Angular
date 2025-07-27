
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'iPhone 14 Pro',
    price: 1199.99
}

const tablet: Product = {
    description: 'iPad Pro',    
    price: 899.99
}

interface TaxCaculationOptions {
    tax: number;
    products: Product[];
}


//function taxCalculation( options: TaxCaculationOptions ): [ number, number] {
//function taxCalculation( { tax, products}: TaxCaculationOptions ): [ number, number] {
export function taxCalculation( options: TaxCaculationOptions ): [ number, number] {

    const { tax, products } = options;
    
    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    })

    return [total, total * tax];
} 


const shoppingCart = [phone, tablet];
const tax = 0.15;


const [ total, taxTotal] = taxCalculation({
    products: shoppingCart,
    // tax: tax
    tax // ES6 shorthand property name
})

// console.log('Total: ', total);
// console.log('Tax: ', taxTotal);

