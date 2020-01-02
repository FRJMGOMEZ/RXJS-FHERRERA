import { range } from "rxjs";
import { tap, map } from "rxjs/operators";



const numbers$ = range(0, 10).pipe(
    tap((num: number) => {
        console.log(`PREV : ${num}`)
    }),
    map((num) => { return num * 10 }),
    tap({ next: (num) => console.log(`AFTER : ${num}`), complete: () => { console.log('is over') } }))


numbers$.subscribe(console.log)