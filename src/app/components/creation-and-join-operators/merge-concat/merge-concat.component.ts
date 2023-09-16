import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-merge-concat',
  templateUrl: './merge-concat.component.html',
  styleUrls: ['./merge-concat.component.scss']
})
export class MergeConcatComponent implements OnInit{
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.getUsersMerge();
    this.getUsersConcat();
  }

  getUsersMerge() {
    this.apiService.getUsersMerge().subscribe({
      next: (result) => {
        console.log('result', result);
      }
    })
  }

  getUsersConcat() {
    this.apiService.getUsersConcat().subscribe({
      next: (result) => {
        console.log('result', result);
      }
    })
  }
}
