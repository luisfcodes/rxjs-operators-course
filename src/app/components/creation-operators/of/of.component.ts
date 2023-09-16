import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {
  ngOnInit(): void {
      this.operatorOf();
  }

  operatorOf() {
    const source = of([1, 2, 3, 4, 5]);
    const promise = of(new Promise((resolve) => resolve('Hello World!')));
    const string = of('Hello World!');

    source.subscribe({
      next: (v) => console.log(`value: ${v}`),
    })

    promise.subscribe({
      next: (v) => v.then((value) => console.log(`value: ${value}`)),
    })

    string.subscribe({
      next: (v) => console.log(`value: ${v}`),
    })
  }
}
