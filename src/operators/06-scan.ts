import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalAcum = (acum: number, current: number) => acum + current;

/// REDUCE //
from(numbers)
    .pipe(
        reduce(totalAcum, 0))
    .subscribe(console.log)


// SCAN //
from(numbers)
    .pipe(
        scan(totalAcum, 0))
    .subscribe(console.log)

// REDUX //

interface User {
    id?: string,
    auth?: boolean,

    token?: string,
    age?: number
}

const user: User[] = [
    { id: 'Fer', auth: false, token: null },
    { id: 'Fer', auth: true, token: 'ABC' },
    { id: 'Fer', auth: true, token: 'ABC123' }
];

const state$ = from(user).pipe(scan<User>((acc, current) => {
    console.log({ ...acc, ...current, edad: 34 })
    return { ...acc, ...current, edad: 34 }
}));

const id$ = state$.pipe(map((state: User) => { return state.auth }))


id$.subscribe(console.log)