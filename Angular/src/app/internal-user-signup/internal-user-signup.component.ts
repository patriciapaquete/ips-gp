import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-internal-user-signup',
  templateUrl: './internal-user-signup.component.html',
  styleUrls: ['./internal-user-signup.component.css']
})
export class InternalUserSignupComponent implements OnInit {


  constructor(private service: UserService, public _fb: FormBuilder) {
  }

  formIPS = this._fb.group({
    email: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
  }

  get email() {
    return this.formIPS.get('email');
  }

  postData() {
    if (this.formIPS.valid) {
      let pass = this.generatepassword(this.formIPS.value.email);
      /*
      TODO : METER AQUI O ENVIAR EMAIL COM A PASSWORD CRIADA
      */
      let formbody = { ... this.formIPS.value, password: pass , tipoMembro :"Voluntario Interno"};
      this.service.register(formbody).subscribe((res) => {
        console.log('response from post data is ', res);
      }, (err) => {
        console.log('error during post is ', err);
      })
    } else {
      console.log('formulario invalido');
    }
  }

  generatepassword(email) {
    const pass = email.slice(0, email.indexOf('@'));
    let endpass = '';
    for (let index = 0; index < pass.length; index++) {
      const asci = pass.charCodeAt(index);
      endpass += asci % 10;

    }
    console.log(endpass);
    return endpass;
  }

}
