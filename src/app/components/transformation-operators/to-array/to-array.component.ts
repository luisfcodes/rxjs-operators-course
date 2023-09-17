import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit{
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.operatorToArray();
  }

  operatorToArray() {
    const http$ = this.apiService.getUserToArray();

    http$.subscribe({
      next: data => console.log(data[0]),
    })
  }
}
