import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements AfterViewInit{
  @ViewChild('inputSearch') inputSearch!: ElementRef;

  constructor(private apiService: ApiService) { }

  ngAfterViewInit(): void {
    this.operatorDebounceTime();
  }

  operatorDebounceTime() {
    fromEvent(this.inputSearch.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(1000),
    ).subscribe({
      next: data => {
        this.apiService.getUsersDebounceTime(data).subscribe({
          next: data => console.log(data),
        })
      }
    })
  }
}
