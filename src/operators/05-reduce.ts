import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totalReducer = (acumulador: number, actual: number) => {
    return acumulador + actual;
}

/* const total = numbers.reduce(totalReducer, 0)

console.log(`Total : ${total}`); */

interval(1000)
    .pipe(take(4),
        tap(console.log),
        reduce(totalReducer, 0))
    .subscribe({ next: (value) => { console.log(value) }, complete: () => { console.log('complete') } })