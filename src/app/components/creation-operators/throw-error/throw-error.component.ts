import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss']
})
export class ThrowErrorComponent implements OnInit {
  ngOnInit(): void {
      this.operatorThrowError();
  }

  operatorThrowError() {
    const source = throwError('This is an error!');
    source.subscribe({
      next: (v) => console.log(`value: ${v}`),
      complete: () => console.log('complete!'),
      error: (error) => console.error(`Error: ${error}`)
    })
  }
}
