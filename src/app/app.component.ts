import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'muralacademico-web';

  isLoggedIn$: Observable<boolean>;                  // {1}

  constructor() { }

  ngOnInit(): void {}

}
