import { interval, timer } from 'rxjs'

const observer = {
    next: value => console.log(value),
    complete: () => { console.log('complete') }
}

const interval$ = interval(1000);

/* console.log('inicio')
 interval$.subscribe(console.log)
console.log('fin')
 */

/* console.log('inicio');
const timer$ = timer(2000,1000);
timer$.subscribe(observer);
console.log('fin'); */


const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const timer$ = timer(hoyEn5);
console.log('inicio');
timer$.subscribe(observer);
console.log('fin'); 
