import { fromEvent } from "rxjs";
import { tap, auditTime, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

/* auditTime envía el último evento en el lapso de tiempo establecido (este lapso de evento, a diferencia del sampleTime, se inicia con la emisión por parte del click de un evento) */

click$.pipe(
    map(({ x, y }) => ({ x, y })),
    tap((event) => { console.log(`TAP: ${event.x} - ${event.y}`) }),
    auditTime(2000)).subscribe(({ x, y }) => {
        console.log(`SUBS: ${x} - ${y}`)
    })