import { ajax } from 'rxjs/ajax';

const url = "https://httpbin.org/delay/1";

ajax.post(url, { name: 'Javier', age: 29 }, { "myToken": "12345fhagh" }).subscribe(console.log)
ajax.put(url, { name: 'Javier', age: 29 }, { "myToken": "12345fhagh" }).subscribe(console.log)
ajax.delete(url, { "myToken": "12345fhagh" }).subscribe(console.log)

/* Esta forma de determinar las características de las petición ajax, es interesante ya que por ejemplo, podemos enviar bopdy en las peticiones delete */
ajax({
    url,
    method: 'DELETE',
    headers: {
        myToken: 'abc123'
    },
    body: {
        id: '1',
        name: 'Javier'
    }
}).subscribe(console.log)