import { range, fromEvent } from 'rxjs'
import { map, pluck, mapTo } from 'rxjs/operators'
/* 
const range$ = range(1, 5);
    
const rangeF$ = range$.pipe(map<number, string>((val) => { return (val * 10).toString() }))

const rangeSubs = rangeF$.subscribe(console.log) */


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$.pipe(map<KeyboardEvent, string>((event) => { return event.code })).subscribe(console.log);

const onClick$ = fromEvent<MouseEvent>(document, 'click');

const onClickF$ = onClick$.pipe(pluck<MouseEvent, string>('target', 'translate'));

const onClickSubs = onClickF$.subscribe(console.log);

const keyupMapTo$ = keyup$.pipe(mapTo<KeyboardEvent, string>('Tecla presionada')).subscribe(console.log); 