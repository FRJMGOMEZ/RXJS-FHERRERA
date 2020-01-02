import { range,asyncScheduler } from 'rxjs';

/* Síncrono */
/* const src$ = range(5,5); */

/* Asíncrono */
const src$ = range(5, 5, asyncScheduler);

console.log('inicio');
src$.subscribe(console.log)
console.log('fin');