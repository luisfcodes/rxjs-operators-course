import { Component, OnInit } from '@angular/core';
import { from, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit{
  ngOnInit(): void {
    this.operatorPluck();
  }

  operatorPluck() {
    const arr$ = from([
      { name: 'John', age: 20 },
      { name: 'Doe', age: 30 },
      { name: 'Foo', age: 40 },

    ])

    const names = arr$.pipe(
      pluck('name')
    )

    names.subscribe({
      next: data => console.log(data),
    })
  }
}
