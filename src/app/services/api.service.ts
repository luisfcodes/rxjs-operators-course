import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concat, debounceTime, forkJoin, interval, map, merge, toArray, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsersForkJoin() {
    const http$ = forkJoin({
      apiLocal: this.http.get('http://localhost:3000/users'),
      apiRemote: this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    })

    return http$;
  }

  getUsersZip() {
    const apiLocal$ = this.http.get('http://localhost:3000/users');
    const apiRemote$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1');

    const result$ = zip(apiLocal$, apiRemote$);

    return result$;
  }

  getUsersMerge() {
    const it$ = interval(1000);
    const apiLocal$ = this.http.get('http://localhost:3000/users');
    const apiRemote$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1');

    const result$ = merge(it$, apiLocal$, apiRemote$);

    return result$;
  }

  getUsersConcat() {
    const it$ = interval(1000);
    const apiLocal$ = this.http.get('http://localhost:3000/users');
    const apiRemote$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1');

    const result$ = concat(it$, apiLocal$, apiRemote$);

    return result$;
  }

  getUsersHttp() {
    const http$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      map((data:any) => {
        return {
          ...data,
          title: data.title.toUpperCase()
        }
      })
    )

    return http$;
  }

  getUserSwitchMap() {
    return this.http.get('http://localhost:3000/user');
  }

  getUserSwitchMapSearch(cpf: string) {
    return this.http.get(`http://localhost:3000/users?cpf=${cpf}`);
  }

  getUserToArray() {
    return this.http.get('http://localhost:3000/user')
      .pipe(
        toArray()
      )
  }

  getUsersDebounceTime(name: string) {
    return this.http.get(`http://localhost:3000/users?name=${name}`)
  }
}
