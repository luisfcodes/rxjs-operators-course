import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss']
})
export class AjaxComponent implements OnInit {
  ngOnInit(): void {
    this.operatorAjax();
  }

  operatorAjax() {
    const http$ = ajax.getJSON('http://localhost:3000/users')
    .pipe(
      catchError(err => {
        console.log('error: ', err);
        return of(err);
      })
    )

    http$.subscribe(console.log);
  }
}
