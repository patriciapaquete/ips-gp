import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../../../models/utilizadores'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  constructor(private service: UserService) { }
  @ViewChild('name') name: ElementRef;
  @ViewChild('dateOfBirth') dob: ElementRef;
  @ViewChild('dateOfCriation') doc: ElementRef;
  @ViewChild('gender') gender: ElementRef;
  @ViewChild('type') type: ElementRef;

  ngOnInit(): void {
    this.service.profile(localStorage.getItem('token')).subscribe((res) => {
      let user = res["user"];
      console.log(user)
      this.name.nativeElement.innerHTML = user.nome;
      this.dob.nativeElement.innerHTML = user.dataDeNascimento;
      this.doc.nativeElement.innerHTML = user.dataCriacao;
      this.gender.nativeElement.innerHTML = user.genero;
      this.type.nativeElement.innerHTML = user.tipoMembro;

    }, (err) => {
      console.log('error during post is ', err);
    });
  }

}
