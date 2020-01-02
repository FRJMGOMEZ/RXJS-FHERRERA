import { Subject, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numbers$ = of(0, 1, 2, 3, 4, 5).pipe(tap(console.log))

numbers$
    .pipe(take(3))
    .subscribe({
        next: (value) => { console.log(`NEXT: ${value}`) },
        error: (err) => { console.log(err) },
        complete: () => { console.log('COMPLETED') }
    })