import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements AfterViewInit {
  @ViewChild('btn') btn!: ElementRef;

  constructor(private apiService: ApiService) { }

  ngAfterViewInit(): void {
    this.operatorSwitchMap();
  }

  operatorSwitchMap() {
    fromEvent(this.btn.nativeElement, 'click').pipe(
      switchMap(() => {
        return this.apiService.getUserSwitchMap();
      })
    ).pipe(
      map((data: any) => data.cpf),
      switchMap(cpf => {
        return this.apiService.getUserSwitchMapSearch(cpf);
      })
    ).subscribe({
      next: data => console.log(data),
    })
  }
}
