import { debounceTime, pluck, distinct, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';


//EXAMPLE 1//
/* let click$ = fromEvent(document,'click').pipe(debounceTime(3000)).subscribe(console.log)  */

//EXAMPLE 2//
let input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup').pipe(
    debounceTime(700),
    pluck('target', 'value'),
    distinctUntilChanged())

input$.subscribe((value) => { console.log(`SEND : ${value}`) })