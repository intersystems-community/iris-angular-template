import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() loggedIn: boolean = false;
  @Input() userName: string = '';

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }

  public logout = () => {
    this.authenticationService.logout();
    console.log("Logging out")
  }

}
