import { Injectable } from '@angular/core';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  // {
  //   "success": true,
  //   "user": {
  //     "projetosFavoritos": [],
  //     "areasInteresse": [],
  //     "_id": "5ecea2983c79043f10586bfa",
  //     "nome": "Joao Silva",
  //     "email": "170221099@estudantes.ips.pt",
  //     "password": "$2a$10$l6JgymOo.wp6XY6oLUpXS./IgrjgVHELZVnrwp8X.nnhtzm5M371C",
  //     "genero": "Masculino",
  //     "dataDeNascimento": "1997-04-26T00:00:00.000Z",
  //     "dataCriacao": "2020-05-27T17:25:44.623Z",
  //     "tipoMembro": "Voluntario Externo",
  //     "aprovado": "Em Espera",
  //     "entidades": [],
  //     "__v": 0
  //   },
  //   "token": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWNlYTI5ODNjNzkwNDNmMTA1ODZiZmEiLCJ0aXBvTWVtYnJvIjoiVm9sdW50YXJpbyBFeHRlcm5vIiwibm9tZSI6IkpvYW8gU2lsdmEiLCJpYXQiOjE1OTA2MDAzOTMzMDMsImV4cCI6MTU5MDYwMDQ3OTcwM30.MDOSH4MHIAa09GY-LtAyL4TdXM-Ril1SnSoc57fCdoy68W8bTlE2ql5UOeE_gJUDlEg9VoE9wIkj8JlsSyLVwTjLMf2TWIwyzmcxf59pU8Bh2l-4y0rcdfn0PAIiGP74EahH5nPimDs-VKQlRs3s_L_GT8GB9ZFKYwhGJHcIs063Ev5As8XMcNbqZhhYPt287UcL1DKq9AfE5SvbL-s0sxzwcn05a8GI4wGX-C-fxrWdHdhwkNQEaknvVhjIYey_U7qhKYuI08TXdXlTIqzTPvEkQkj-dHZ9VrW-YJKNvrlwBDiyCP1qGtXhqDACRrmpbpTcm84s7Yc1nBoZfvgDi-cUegPo_VWUEZc2iwe0qkQ0SEbGcvyrMKvm5ssq2CZpsVTPb7nUAoA40kllVFldhjRGm7xVSRN56Mv-azfpO6aML0dxcQfxZVVOkqluHV9YPBhkf6hy0wapkJAclUopVaRIaJbzXFRkYKyV3CZJW7f6bNXOVdoHiIIbzMEj7VYfojBVNYEMXNkzF-zqW5JlbiSfmsRMvLJA66CRNsu_TuZqGNXhWZxMIU1q5TQduxTWHyI-ontc948OmkA3m63uQ8JmV9RHB7o6eSc4IlRqH6w6_gS9wH6BOmrpDMK9zxpfvfBeSGso9GoTe99SrzzDDkRnTv3mp2E-zHOxZ5_XLHI",
  //   "expiresIn": "1d"
  // }


  setLocalStorage(responseObj){
    const expires = moment().add(responseObj.expiresIn);

    localStorage.setItem('token',responseObj.token);
    localStorage.setItem('expires',JSON.stringify(expires.valueOf()));
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
  }

  isLoggedIn(){
    return moment().isBefore(this.getExpiration());
  }

  isLoggedout(){
    return !this.isLoggedIn();
  }

  getExpiration(){
    const expiration = localStorage.getItem('expires');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
