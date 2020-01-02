import { interval, fromEvent } from "rxjs";
import { sample, tap } from "rxjs/operators";

const interval$ = interval(5000);

const click$ = fromEvent(document, 'click');


interval$.pipe(
    tap(console.log),
    sample(click$))
    .subscribe(console.log)