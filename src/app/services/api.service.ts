import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concat, forkJoin, interval, merge, zip } from 'rxjs';

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
}
