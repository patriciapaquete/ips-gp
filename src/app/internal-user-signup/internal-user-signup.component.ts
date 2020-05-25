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
      let formbody = { ...this.formIPS.value };
      console.log(formbody);
      this.service.login(formbody);/*.subscribe((res) => {
        console.log('response from post data is ', res);
      }, (err) => {
        console.log('error during post is ', err);
      })*/
    } else {
      console.log('formulario invalido');
    }
  }


}
