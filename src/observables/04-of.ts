import { of } from 'rxjs'


/* const oes$ = of(1,2,3,4,5,6); */
const oes$ = of<number>(1, 2, 3, 4, 5, 6);

console.log('inicio observable')
oes$.subscribe(
    next => console.log(`next ${next}`),
    null,
    () => console.log('complete'))
console.log('fin de observable')    
