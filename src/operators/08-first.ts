import { fromEvent } from 'rxjs';
import { first } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');
click$
    .pipe(
        first<MouseEvent>((event:MouseEvent)=>{return event.clientY > 150 })
    )
    .subscribe(
        {
            next: (value) => { console.log(`NEXT ${value}`) },
            complete: () => { console.log('COMPLETE') }
        }
    )