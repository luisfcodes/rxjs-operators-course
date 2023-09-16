import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit{
  ngOnInit(): void {
      this.operatorInterval();
  }

  operatorInterval() {
    const source = interval(1000); // emit value in sequence every 1 second
    const sourceSubscribe = source.subscribe({
      next: (v) => console.log(`value: ${v}`),
    })

    setTimeout(() => {
      sourceSubscribe.unsubscribe();
    }, 5000) // unsubscribe after 5 seconds
  }
}
