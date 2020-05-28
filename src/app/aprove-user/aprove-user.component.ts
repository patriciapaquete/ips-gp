import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { User } from '../../../models/utilizadores'


@Component({
  selector: 'app-aprove-user',
  templateUrl: './aprove-user.component.html',
  styleUrls: ['./aprove-user.component.css']
})
export class AproveUserComponent implements OnInit {
  utilizadores: Array<User>;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getDisaprovedUsers().subscribe(users => {
      this.utilizadores = users;
    });
  }

  aprovarUtilizador(utilizador) {
    this.service.aproveUser(utilizador).subscribe(res => {
      console.log(res);
    });
  }

}
