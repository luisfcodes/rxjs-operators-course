import { Component, OnInit } from '@angular/core';
import { from, scheduled } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit{
  ngOnInit(): void {
      this.operatorFrom();
  }

  operatorFrom() {
    const source = from([1, 2, 3, 4, 5]);
    const promise = from(new Promise((resolve) => resolve('Hello World!')));
    const string = from('Hello World!');

    source.subscribe({
      next: (v) => console.log(`value: ${v}`),
    })

    promise.subscribe({
      next: (v) => console.log(`value: ${v}`),
    })

    string.subscribe({
      next: (v) => console.log(`value: ${v}`),
    })
  }
}
