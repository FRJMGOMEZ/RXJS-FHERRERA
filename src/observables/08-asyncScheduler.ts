

import { asyncScheduler } from 'rxjs';

setTimeout(() => {
}, 3000)


setInterval(() => {
}, 3000)

const sayHello = () => {
    console.log('Hola mundo')
}

const sayHello2 = (name) => {
    console.log(`Hi ${name}`)
}


/* setTimeout with asyncScheduler */

/* asyncScheduler.schedule(sayHello,2000);*/
asyncScheduler.schedule(sayHello2, 4000, 'Pancho')


/* setInterval with asycScheduler */

const subs = asyncScheduler.schedule(
    function (state) { console.log(state); this.schedule(state + 1, 1000) },
    3000,
    0);

asyncScheduler.schedule(() => { subs.unsubscribe() }, 10000)