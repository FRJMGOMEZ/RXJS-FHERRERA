import { debounceTime, pluck, distinct, distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { fromEvent, asyncScheduler } from 'rxjs';

/* El throttleTime nos es muy útil cuando no queremos saturar de peticiones incoadas por el evento click al back,
   emite el evento y establece un lapso de tiempo hasta la emisión del siguiente */
let click$ = fromEvent(document, 'click').pipe(throttleTime(3000)).subscribe(console.log)


/* Podemos invertir el funcionamiento de throttleTime para que funcione parecido al debounceTime, emitiendo el último valor en el laspso de un segundo
   podemos ajustar el tiempo del throttleTime a la extensión esperada de los inputs de una búsqueda */
let input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup').pipe(
    throttleTime(3000, asyncScheduler, { leading: false, trailing: true }),
    pluck('target', 'value'),
    distinctUntilChanged())

input$.subscribe((value) => { console.log(`SEND : ${value}`) })