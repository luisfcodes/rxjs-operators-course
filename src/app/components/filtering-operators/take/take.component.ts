import { Component, OnInit } from '@angular/core';
import { from, map, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  ngOnInit(): void {
    this.operatorTake();
  }

  operatorTake() {
    const arr$ = from([
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 },
      { name: 'Jack', age: 15 },
    ])

    arr$.pipe(
      map(person => person.name),
      take(1),
    ).subscribe({
      next: data => console.log(data),
    })
  }
}
