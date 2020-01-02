import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
        map(({ x, y }) => ({ x, y })),
        takeWhile(({ y }) => { return y > 150 }, true))
    .subscribe(
        {
            next: (value) => console.log(`x: ${value.x} , y: ${value.y}`),
            complete: () => console.log('COMPLETE')
        }
    )
