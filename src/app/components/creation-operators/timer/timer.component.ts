import { Component, OnInit } from '@angular/core';
import { concatMap, of, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit{
  ngOnInit(): void {
      this.operatorTimer();
  }

  operatorTimer() {
    const source = of(1, 2, 3);

    timer(2000).pipe(
      concatMap(() => source)
    ).subscribe({
      next: (v) => console.log(`value: ${v}`),
    })

  }
}
