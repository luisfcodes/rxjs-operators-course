import { Component, OnInit } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.scss']
})
export class TakeWhileComponent implements OnInit{
  ngOnInit(): void {
    this.operatorTakeWhile();
  }

  operatorTakeWhile() {
    const it$ = interval(1000);

    it$.pipe(
      takeWhile(data => data <= 5),
    ).subscribe({
      next: data => console.log(data),
    })
  }
}
