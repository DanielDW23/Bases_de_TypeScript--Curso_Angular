
export function whatsMyType<T>( argument: T ): T {
    return argument;
}

const amIString = whatsMyType<string>('Hello World');
const amINumber = whatsMyType<number>(123);
const amIArray = whatsMyType<number[]>([1, 2, 3]);

console.log(amIString.split('')); // Hello World
console.log(amINumber.toFixed()); // 123  
console.log(amIArray.join('-')); // [1, 2, 3] 
