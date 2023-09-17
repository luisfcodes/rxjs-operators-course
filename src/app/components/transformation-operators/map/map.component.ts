import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.operatorMap();
  }

  operatorMap() {
    const arr$ = from([
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com"
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "janedoe@example.com"
      },
      {
        id: 3,
        name: "John Smith",
        email: "johnsmith@example.com"
      }
    ])

    const arrMap$ = arr$.pipe(
      map((data) => {
        return {
          id: data.id,
          name: data.name.toUpperCase(),
          email: data.email
        }
      })
    ).subscribe({
      next: (data) => console.log(data),
    })

    this.apiService.getUsersHttp().subscribe({
      next: (data) => console.log(data),
    })
  }
}
