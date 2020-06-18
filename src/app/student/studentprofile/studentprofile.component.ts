import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {

  sdetails:any=[];
  display:boolean=false;
  stuserid:string;

  value1:string;
  value2:string;
  value3:string;

  constructor(private ds:DataService) { }

  ngOnInit() {
    // this.sdetails.push(this.ds.display2());

    this.stuserid=this.ds.display3();
    this.ds.getprofile(this.stuserid).subscribe(sd=>{
      this.sdetails.push(sd['message'])
      //sending to details component thru service
      this.ds.sdetail=sd['message']
      this.display=true

      if(this.sdetails[0].angular==true)
    {
      this.value1='yes'
    }
    else if (this.sdetails[0].angular=="")
    {
      this.value1='no'
    }
    
    if(this.sdetails[0].nodejs==true)
    {
      this.value2='yes'
    }
    else if (this.sdetails[0].nodejs=="")
    {
      this.value2='no'
    }

    if(this.sdetails[0].python==true)
    {
      this.value3='yes'
    }
    else if (this.sdetails[0].python=="")
    {
      this.value3='no'
    }
    })
  
    
  }
  

}
