import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements AfterViewInit {
  @ViewChild('logout') logout: ElementRef;
  @ViewChild('logged') logged: ElementRef;
  constructor() {

  }

  ngAfterViewInit(): void {
    if (localStorage.getItem('token')) {
      console.log(localStorage.getItem('token'))
      this.logged.nativeElement.style.display = 'block';
      this.logout.nativeElement.style.display = 'none';
    } else {
      console.log(this.logout);
      this.logout.nativeElement.style.display = 'block';
      this.logged.nativeElement.style.display = 'none';

    }
  }


}
