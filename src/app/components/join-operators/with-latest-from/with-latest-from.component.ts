import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss']
})
export class WithLatestFromComponent implements OnInit {

  ngOnInit(): void {
    this.operatorWithLatestFrom();
  }

  operatorWithLatestFrom() {
    const clicks = fromEvent(document, 'click')

    const timer$ = interval(1000)

    const result = clicks.pipe(
      withLatestFrom(timer$),
    )

    result.subscribe({
      next: (value) => console.log(value),
    })
  }

}
