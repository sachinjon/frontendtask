import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AppService } from './../app.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  userid:string;
  result:any;
  constructor(private _ActivatedRoute:ActivatedRoute,private _AppService:AppService,private _Router:Router,private _location: Location) { }

  ngOnInit() {

    this.userid =this._ActivatedRoute.snapshot.params["id"];
    console.log( this.userid);
    
    this._AppService.user("photos?albumId="+this.userid+"")
    .subscribe(val=>{
      this.result = val;
        console.log("temp:"+this.result);
    });
  }

  gotoalbumpage(){
    console.log("inuser page");
    this._location.back();
  }

}
