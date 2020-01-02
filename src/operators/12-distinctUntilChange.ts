import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

let list = document.createElement('div');

let body = document.querySelector('body');
body.append(list);

interface Change {
    date: string,
    value?: number
}

let now = new Date();

let lastChange: Change = {
    date: `${now.getSeconds()}`,
}
let lastChangeP = document.createElement('p');
lastChangeP.innerHTML = `LAST CHANGE: seconds ${lastChange.date || 'NO CHANGES'} , value ${lastChange.value || 0}`;
list.append(lastChangeP);

let flowObserver = {
    next: (num: number) => {
        lastChangeP.innerHTML = `LAST CHANGE: seconds ${new Date().getSeconds() || 0}  , value ${num || 'NO CHANGES'} `
        return
    },
    complete: () => {
        console.log('SECUENCIA COMPLETADA')
    }
};

const flow$ = new Observable<number>((subscriber) => {
    let numbers = [1, 1, 2, 2, 1, 1, 2, 2, 2, 3, 2, 3, 3, 3, 4, 3, 4, 4, 4, 5, 4, 5, 4, 5, 6, 6, 6, 7, 8, 9, 7, 6, 7, 8, 8, 7, 8, 9];
    let index = 0;
    const intervalId = setInterval(() => {
        subscriber.next(numbers[index]); index++
        if (!numbers[index]) {
            subscriber.complete();
            return () => { clearInterval(intervalId); console.log('clear interval') }
        }
    }, 1000)
});

flow$.pipe(
    distinctUntilChanged()
).subscribe(flowObserver);




