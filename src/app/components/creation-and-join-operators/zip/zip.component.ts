import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit{

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getUsersZip();
  }

  getUsersZip() {
    this.apiService.getUsersZip().subscribe({
      next: (result) => {
        console.log('result', result);
      }
    })
  }
}
