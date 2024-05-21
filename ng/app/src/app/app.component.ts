import { Component } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App Name';
  userName: string = '';
  loggedIn: boolean = false;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.authenticationService.user.subscribe(user => {
      this.userName = user?.Username || "";
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
  });
  }
}
