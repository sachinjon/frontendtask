import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { AppService } from './../app.service';

@Component({
  selector: 'app-albumbs',
  templateUrl: './albumbs.component.html',
  styleUrls: ['./albumbs.component.css']
})
export class AlbumbsComponent implements OnInit {
  userid:string;
  result:any;
  constructor( private _ActivatedRoute:ActivatedRoute,private _AppService:AppService,private _Router:Router) { }

  ngOnInit() {
    this.userid =this._ActivatedRoute.snapshot.params["id"];
    console.log( this.userid);
    
    this._AppService.user("albums?userId="+this.userid+"")
    .subscribe(val=>{
      this.result = val;
       // this.result =JSON.stringify(val);
        console.log("temp:"+this.result);
    });
  }


  Gotophotos(id){
      console.log("id:"+id);
      this._Router.navigate(["/photos",id]);
  }
  gotouserpage(){
    console.log("inuser page");
    this._Router.navigate(["../"]);
  }

}
