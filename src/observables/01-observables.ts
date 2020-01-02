import { Observable, Observer } from 'rxjs'

const obs$ = new Observable<string>(subscriber => {
    subscriber.next('hello');
    subscriber.next('world');
    subscriber.complete();
});

const observer: Observer<string> = {
    next: value => console.log(value),
    error: error => alert(error),
    complete: () => console.log('completado')
}

obs$.subscribe(observer)

obs$.subscribe((event) => {
    console.log(event)
})