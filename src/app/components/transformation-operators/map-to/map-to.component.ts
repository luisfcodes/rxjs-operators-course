import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, mapTo } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.scss']
})
export class MapToComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorMapTo();
  }

  operatorMapTo() {
    const click$ = fromEvent(document, 'click');
    const it$ = interval(1000);

    const result$ = click$.pipe(
      mapTo('Clicked!')
    )

    const resultIt$ = it$.pipe(
      mapTo('Number has been emitted!')
    )

    result$.subscribe({
      next: (data) => console.log(data),
    })

    resultIt$.subscribe({
      next: (data) => console.log(data),
    })
  }
}
