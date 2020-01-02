import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = "https://httpbino.org/delay/1";


//Podemos mandar headers fácilmente//
const obs$ = ajax.getJSON(url, {
    "Content-Type": "application/json",
    "Token": "abc123",
});
const obs2$ = ajax(url);

/// A través de catchError, obtenemos el error y podemos retornar otro observable //
const handleError = (resp: AjaxError) => {
    console.warn(`ERROR: ${resp.message}`)
    return of({
        ok: false,
        users: []
    })
}

//Cuando manejamos el error con el catchError, el error en el observer no se detecta ///
const observer = {
    next: (val) => {
        console.log(`VALUE: ${val}`)
    },
    error: (err) => { console.warn(`ERROR : ${err}`) },
    complete: () => { console.log('OBSERVABLE IS COMPLETED') }
}


obs$.pipe(catchError(handleError)).subscribe(observer);
obs2$.pipe(catchError(handleError)).subscribe(observer);