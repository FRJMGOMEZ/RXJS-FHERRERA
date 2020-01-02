import { fromEvent, from, Observable, Subscription } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from "rxjs/operators";
import { ajax } from 'rxjs/ajax';

import { GithubUsersResponse } from '../interfaces/github-users-response.interface';
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUserDetails } from '../interfaces/github-user-details.interface';


/* REFERENCES */
const body = document.querySelector('body');

const textInput = document.createElement('input');

const orderList = document.createElement('ol');

body.append(textInput, orderList);


const renderUser = (user: GithubUserDetails) => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = user.avatar_url;
    let a = document.createElement('a');
    a.setAttribute('target', '_blank');
    a.innerHTML = user.login || 'no-name';
    a.href = user.url;
    let p = document.createElement('p');
    p.innerHTML = user.bio ? `DESCRIPTION: ${user.bio}` : 'no-description'
    li.append(img);
    li.append(a);
    li.append(p);
    orderList.append(li);
    return
}


/* STREAMS */
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

let usersLength = 0;
let usersRendered = 0;

let mainStream: Subscription = input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GithubUsersResponse>>((input: string) => ajax.getJSON(`https://api.github.com/search/users?q=${input}`)),
    mergeAll<GithubUsersResponse>(),
    pluck<GithubUsersResponse, GithubUser[]>('items'),
    map<GithubUser[], Observable<GithubUserDetails>>((githubUsers: GithubUser[]) => {
        usersLength = githubUsers.length;
        let urls = [];
        githubUsers.forEach((githubUser: GithubUser) => {
            urls.push(ajax.getJSON(githubUser.url))
        })
        return from(urls).pipe(mergeAll<GithubUserDetails>())
    }),
    mergeAll<GithubUserDetails>()
)
    .subscribe((user: GithubUserDetails) => {
        renderUser(user);
        usersRendered++
        if (usersRendered === usersLength) {
            mainStream.unsubscribe()
        }
    })