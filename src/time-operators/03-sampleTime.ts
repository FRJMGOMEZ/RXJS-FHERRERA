import { fromEvent } from 'rxjs';
import { sampleTime, map } from 'rxjs/operators';

/* sampleTime emite en último evento en el lapso de tiempo determinado, el lapso se inicia en el momento de la susbcripción */
const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(1000),
    map(({ x, y }) => ({ x, y }))).subscribe(console.log)