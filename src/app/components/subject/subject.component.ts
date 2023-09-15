import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
      this.initSubject();
  }

  initSubject() {
    const subject = new Subject<number>()
    const behaviorSubject = new BehaviorSubject(0)

    subject.subscribe({
      next: value => console.log(value),
      error: error => console.log(error),
      complete: () => console.log('Complete')
    })

    behaviorSubject.subscribe({
      next: value => console.log(value),
      error: error => console.log(error),
      complete: () => console.log('Complete')
    })

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
    subject.next(5);
    subject.complete();

    behaviorSubject.next(1);
    behaviorSubject.next(2);
    behaviorSubject.next(3);
    behaviorSubject.next(4);
    behaviorSubject.next(5);
    behaviorSubject.complete();
  }
}
