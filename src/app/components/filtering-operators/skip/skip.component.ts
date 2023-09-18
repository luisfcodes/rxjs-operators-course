import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, skip, tap } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent implements AfterViewInit {
  @ViewChild('btn') btn!: ElementRef;

  ngAfterViewInit(): void {
    this.operatorSkip();
  }

  operatorSkip() {
    fromEvent(this.btn.nativeElement, 'click').pipe(
      skip(4),
      tap(data => console.log(data)),
    ).subscribe();
  }
}
