import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements AfterViewInit {
  @ViewChild('logout') logout: ElementRef;
  @ViewChild('logged') logged: ElementRef;
  constructor(private service: AuthService) {

  }

  ngAfterViewInit(): void {

    if (localStorage.getItem('token')) {
      this.logged.nativeElement.style.display = 'block';
      this.logout.nativeElement.style.display = 'none';
    } else {
      console.log(this.logout);
      this.logout.nativeElement.style.display = 'block';
      this.logged.nativeElement.style.display = 'none';

    }
  }

  logOut() { this.service.logout(); }
}
