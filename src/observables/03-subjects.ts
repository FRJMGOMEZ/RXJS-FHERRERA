import { Observable, Observer, Subscriber, Subject } from 'rxjs'

const observer: Observer<number> = {
    next: value => console.log(value),
    error: error => alert(error),
    complete: () => console.info('completado')
}

const intervals$ = new Observable<number>((subscriber) => {
    const intervalId = setInterval(() => { subscriber.next(Math.random()) }, 1000)
    return () => { clearInterval(intervalId); console.log('clear interval') }
})

/* 
const subs1$ = intervals$.subscribe((val)=>{ console.log(`subs 1 : ${val}`)})
const subs2$ = intervals$.subscribe((val) => { console.log(`subs 2 : ${val}`)}) */


/* Es es casteo múltiple: muchas subscripciones van a estar sujetas a este mismo subject, suministrando la misma info,
   También es un observer 
   Le podemos mandar un subject 
   También se puede manejar el next, error y complete
   Nos permite transformar un cold observable en un hot observable*/
const subject$ = new Subject<number>()
const intervalSource = intervals$.subscribe(subject$);
const subs1$ = subject$.subscribe(observer)
const subs2$ = subject$.subscribe(observer)

setTimeout(() => {
    subject$.next(10)
    subject$.complete()
    intervalSource.unsubscribe();
}, 3500)