import { Component, OnInit } from '@angular/core';
import { of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorStartWith();
  }

  operatorStartWith() {
    const values = of(1, 2, 3)

    const numbers = values.pipe(startWith(12))

    numbers.subscribe({
      next: (value) => console.log(value),
    })
  }
}
