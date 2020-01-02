import { range, asyncScheduler, Observable, Observer, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';



/* const range$ = range(10,20,asyncScheduler);

const rangeF$ = range$.pipe(filter((value,index)=>{console.log(`index ${index}`);return value % 2 === 0 }));
const rangeSubs = rangeF$.subscribe(console.log); */


interface Character {
    name: string,
    role: string
}

const characters: Character[] = [
    {
        name: 'Batman',
        role: 'heroe',
    },
    {
        name: 'Aquaman',
        role: 'heroe'
    },
    {
        name: 'Joker',
        role: 'villain'
    }
]

const obs$ = new Observable<Character>(subscriber => {
    let index = 0;
    const interval = setInterval(() => {
        if (characters[index]) {
            subscriber.next(characters[index]);
            index++
            if (!characters[index]) {
                clearInterval(interval);
                subscriber.complete()
            }
        }
    }, 2000)
})

const heroes$ = obs$.pipe(filter((character: Character) => { return character.role === 'heroe' }))
const villains$ = obs$.pipe(filter((character: Character) => { return character.role === 'villain' }))

const printObserver: Observer<string> = {
    next: character => console.log(character),
    error: error => alert(error),
    complete: () => console.log('completado')
}

heroes$.pipe(map((character: Character) => { return character.name })).subscribe(printObserver);
villains$.pipe(map((character: Character) => { return character.name })).subscribe(printObserver);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$.pipe(
    map((event: KeyboardEvent) => { return event.code }),
    filter((code: string) => { return code === "Enter" })).subscribe(console.log)



