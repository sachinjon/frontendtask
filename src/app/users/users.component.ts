import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  result:any;
  constructor(private _appservice:AppService,private _Router:Router) { }

  ngOnInit() {
   this._appservice.user('users')
    .subscribe(val=>{
      this.result = val;
       // this.result =JSON.stringify(val);
        console.log("temp:"+this.result);
    });
  }

  GotoAlbums(id){
    console.log("id:"+id);
    this._Router.navigate(["/albumbs",id]);

  }

}
