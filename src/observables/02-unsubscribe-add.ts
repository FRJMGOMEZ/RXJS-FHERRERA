import { Observable, Observer, Subscriber } from 'rxjs'

const observer: Observer<number> = {
    next: value => console.log(value),
    error: error => alert(error),
    complete: () => console.info('completado')
}

const interval$ = new Observable<number>((subscriber: Subscriber<any>) => {
    let number = 0;
    const interval = setInterval(() => {
        number++
        subscriber.next(number)

    }, 1000)
    return () => {
        clearInterval(interval);
        console.log('intervalo destruido')
    }
})

const subs1 = interval$.subscribe(observer)
const subs2 = interval$.subscribe(observer)
const subs3 = interval$.subscribe(observer)


/* Provoca el unsubscribe de las otras dos subscripciones */
subs1.add(subs2)
    .add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
    console.log('unsubscription')
}, 3000)