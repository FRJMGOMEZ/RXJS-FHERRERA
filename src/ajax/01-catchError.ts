import { ajax, AjaxError } from 'rxjs/ajax'
import { pluck, catchError } from 'rxjs/operators';
import { of, Observable, from, Subscription } from 'rxjs';

const url1 = "https://api.github.com/userss?per_page=5";
const url2 = "https://api.github.com/userss?per_page=5";
const url3 = "https://api.github.com/userss?per_page=5";
const url4 = "https://api.github.com/userss?per_page=5";
const url5 = "https://api.github.com/userss?per_page=5";
const url6 = "https://api.github.com/userss?per_page=5";
const url7 = "https://api.github.com/users?per_page=5";

/* fetch API de javascript */

/* const handleErrors = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response;
} */

/* const getError = (err:AjaxError)=>{
    index++;console.log(err);
        return ajaxRequest()
}
 */
/* const fetchPromise = fetch(url1); */

/* fetchPromise
    .then(handleErrors)
    .then((res: Response) => {
        return res.json()
    })
    .then((res:Response)=>{
          console.log(res)
    })
    .catch((err) => { console.log(err) }) */


/* Ajax de rxjs */

let urls = [url1, url2, url3, url4, url5, url6, url7];

let index = -1;

const ajaxRequest = () => {
    index++;
    if (urls[index]) {
        return ajax(urls[index])
            .pipe(
                catchError(err => {
                    return ajaxRequest()
                }))
    } else {
        return of({
            response: null
        })
    }
}
let mainSubscription: Subscription = ajaxRequest().pipe(pluck('response')).subscribe((res: Response) => {
    console.log(res)
    mainSubscription.unsubscribe()
})

