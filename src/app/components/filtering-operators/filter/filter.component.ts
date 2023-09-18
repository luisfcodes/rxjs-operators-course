import { Component, OnInit } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  ngOnInit(): void {
    this.operatorFilter();
  }

  operatorFilter() {
    const arr$ = from([
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 },
      { name: 'Jack', age: 15 },
    ])

    const namesFiltered$ = arr$.pipe(
      filter(person => person.age >= 18),
    ).subscribe({
      next: data => console.log(data),
    })
  }
}
