import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private authService: AuthService, public _fb: FormBuilder, private router: Router) {
  }

  formLogin = this._fb.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
  }

  get password() {
    return this.formLogin.get('password');
  }

  get email() {
    return this.formLogin.get('email');
  }

  postData() {
    if (this.formLogin.valid) {
      this.service.login(this.formLogin.value).subscribe((res) => {
        this.authService.setLocalStorage(res);
        this.router.navigate(["/"]);

      }, (err) => {
        console.log('error during post is ', err);
      });

    } else {
      console.log('formulario invalido');
    }
  }

}
