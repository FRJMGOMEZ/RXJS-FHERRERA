import { Observer, from, of } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log(value),
    error: error => alert(error),
    complete: () => console.log('completado')
}

/* const source1$ = from([1,2,3,4,5,6]);
const source2$ = of(...[1, 2, 3, 4, 5, 6]);

source1$.subscribe(console.log)
source2$.subscribe(console.log)

console.log('The end') */


/* const source3$ = from(fetch('https://api.github.com/users/klerith'));


source3$.subscribe(async(res)=>{
    console.log(await res.json())
}); */

const myGenerator = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const iterable = myGenerator();

/* for(let x of iterable){
    console.log(x)
} */

from(iterable).subscribe(observer);