import { Component, OnInit } from '@angular/core';
import { forkJoin, of, throwError, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.operatorForkJoin();
    this.getUsers();
  }

  operatorForkJoin() {
    const http$ = forkJoin({
      apiLocal: ajax.getJSON('http://localhost:3000/users'),
      apiRemote: ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
    })

    const httpMulti$ = forkJoin({
      first: of(1, 2, 3),
      second: timer(1000),
      third: throwError('This will error'),
      fourth: Promise.resolve(4),
    })

    http$.subscribe(console.log);

    httpMulti$.subscribe(console.log);
  }

  getUsers() {
    this.apiService.getUsersForkJoin().subscribe(console.log);
  }
}
