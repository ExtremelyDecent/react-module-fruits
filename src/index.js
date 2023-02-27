import fruits from './fruits';
import {choice, remove} from './helpers';

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please.`);
console.log(`Here you go ${fruit}`);
console.log(`Delicious! May I have another?`);
let left = remove(fruit, fruits);
console.log(`I'm sorry, we're all out. We have ${left.length} left.`);