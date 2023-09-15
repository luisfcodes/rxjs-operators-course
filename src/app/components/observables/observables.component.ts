import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {
  ngOnInit(): void {
      this.initObservable();
  }

  initObservable() {
    const observable = new Observable(subscriber => {
      subscriber.next(10);
      subscriber.next('Luis');
      subscriber.next(true);
      subscriber.next({name: 'Luis', age: 26});
      subscriber.complete();
    })

    observable.subscribe({
      next: value => console.log(value),
      error: error => console.log(error),
      complete: () => console.log('Complete')
    })

    const it = interval(1000);

    const itSubscribe = it.subscribe({
      next: value => console.log(value),
    })

    setTimeout(() => {
      itSubscribe.unsubscribe();
    }, 5000);
  }
}
