import { Observable } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

let list = document.createElement('div');

let body = document.querySelector('body');
body.append(list);
interface Heroe {
    name: string,
    power: string
}

let heroes = [
    {
        name: 'Ironman',
        power: 'fly'
    },
    {
        name: 'Captain América',
        power: 'strenght'
    },
    {
        name: 'Hulk',
        power: 'strenght'
    },
    {
        name: 'Flash',
        power: 'fly'
    },
    {
        name: 'Black Widow',
        power: 'smartness'
    },
    {
        name: 'NickFury',
        power: 'smartness'
    },
]

let flowObserver = {
    next: (heroe: Heroe) => {
        let lastChangeP = document.createElement('p');
        lastChangeP.innerHTML = `HEROE : ${heroe.name} ; POWER: ${heroe.power}`;
        list.append(lastChangeP);
        return
    },
    complete: () => {
        console.log('SECUENCIA COMPLETADA')
    }
};

const flow$ = new Observable<Heroe>((subscriber) => {
    let index = 0;
    const intervalId = setInterval(() => {
        subscriber.next(heroes[index]); index++
        if (!heroes[index]) {
            subscriber.complete();
        }
    }, 1000)
    return () => {
        clearInterval(intervalId); console.log('clear interval')
    }
});

flow$.pipe(
    distinctUntilKeyChanged('power')
).subscribe(flowObserver);
