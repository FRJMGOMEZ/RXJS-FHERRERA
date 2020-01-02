import { of } from 'rxjs';
import { distinct, tap } from 'rxjs/operators';

let list = document.createElement('div');

let body = document.querySelector('body');
body.append(list);

let content: Item[] = [];
interface Item {
    value: number,
    timer: number
}

let flowObserver = {
    next: (num: number) => {
        let newItem: Item = {
            value: num,
            timer: 1
        }
        content.push(newItem);
        return
    },
    complete: () => {
        content.forEach((eachItem) => {
            let paragraph = document.createElement('p')
            paragraph.innerHTML = `VALUE ${eachItem.value} , TIMES:${eachItem.timer}`;
            list.append(paragraph);
            let space = document.createElement('br');
            list.append(space)
        })
    }
}

let flow$ = of(1, 1, 2, 4, 5, 6, 3, 2, 4, 6, 7, 6, 1, 2, 3, 4, 6, 7, 8, 8, 1, 2, 3, 4, 5);
flow$.pipe(
    tap<number>((num: number) => {
        let item = content.filter((eachItem: Item) => { return eachItem.value === num })[0];
        if (item) {
            item.timer++
        }
    }),
    distinct<number, number>()
)
    .subscribe(flowObserver)
