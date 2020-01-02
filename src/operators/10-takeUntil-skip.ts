import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'STOP TIMER'
document.querySelector('body').append(button)

const counter$ = interval(1000);

//LA SUBSCRIPCIÓN SOLO RECIBIRÁ EL EVENTO CUANDO SE HAGA DOBLE CLICK//
const click$ = fromEvent(button, 'click').pipe(skip(1))

counter$
    .pipe(takeUntil(click$))
    .subscribe({
        next: (value) => console.log(value),
        complete: () => console.log('COMPLETE')
    })
