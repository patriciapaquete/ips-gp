import { Component, OnInit } from '@angular/core';
import {RootService} from './root.service';
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private rootService:RootService) { }

  ngOnInit() {
    this.rootService.getApiData().subscribe((res)=>{
      console.log('response is ', res);
    },(error)=>{
      console.log('error is ', error);
    });
  }

}
