import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements AfterViewInit{
  @ViewChild('btn') btn!: ElementRef;

  ngAfterViewInit(): void {
    this.operatorFromEvent();
  }

  operatorFromEvent() {
    const source = fromEvent(this.btn.nativeElement, 'click');
    source.subscribe({
      next: (v) => console.log(v),
    })
  }
}
