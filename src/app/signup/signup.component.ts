import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupService } from './signup.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  areas: Array<String> = ['Atividades Académicas', 'Ambiental', 'Apoio a Eventos', 'Informática', 'Comunicação', 'Cultural', 'Desporto', 'Educação', 'Saúde', 'Social'];
  selectedAreas: Array<String>;
  selectedAreasError: Boolean
  formRegisto: FormGroup;
  constructor(private service: SignupService,private _fb:FormBuilder) {

  }

  ngOnInit() {
    this.formRegisto = this._fb.group({
      nome: new FormControl(''),
      dataNascimento: new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      confirmPassword: new FormControl(''),
      phoneNumber: new FormControl(''),
      distrito: new FormControl(''),
      cidade: new FormControl(''),
      tipoMembro: new FormControl(''),
      escola: new FormControl(''),
      formacao: new FormControl(''),
      areas: this.addAreasInteresse(),
    });
  }

  addAreasInteresse(){
    const arr = this.areas.map(element=>{
      return this._fb.control(false);
    });
    return this._fb.array(arr);
  }

  get areasArray(){
    return<FormArray>this.formRegisto.get('areas');
  }

  getSelectedAreas(){
    this.selectedAreas = [];
    this.areasArray.controls.forEach((control, i)=>{
      if (control.value){
        this.selectedAreas.push(this.areas[i]);
      }
    });
    console.log(this.selectedAreas);
    this.selectedAreasError = this.selectedAreas.length > 0 ?false :true;
  }

  postData() {
    const newItem = this.selectedAreas;
    console.log({...this.formRegisto.value,newItem});
    // this.service.signUpCall(data).subscribe((res) => {
    //   console.log('response from post data is ', res);
    // }, (err) => {
    //   console.log('error during post is ', err);
    // });
   }
}
