import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sID: any;
  // foradmin:boolean=true;
  // forstd:boolean=false;
  // token:any;

  constructor(private route: Router, private ds: DataService) { }

  ngOnInit() {
    setTimeout(() => {
      this.ds.logout();
    }, 0);

  }


  method(x1) {
    this.ds.login(x1).subscribe(logdet => {
      this.sID = logdet['userid']
      // this.token=logdet['token']

      if (x1.role == 'admin') {
        if (logdet['message'] == 'invalid id') {
          alert('please check your userID')
        }
        else if (logdet['message'] == 'invalid password') {
          alert('please enter valid password')
        }
        else {
          alert('login successful')
          this.ds.userloginstatus = true;
          this.route.navigate(['/admindashboard/adminprofile'])
        }
      }

      //  else if(x1.role==logdet['message'].role)
      else if (x1.role == 'student') {
        if (logdet['message'] == 'invalid email') {
          alert('please check your userID')
        }
        else if (logdet['message'] == 'invalid password') {
          alert('please enter valid password')
        }
        else {
          alert('login successful')
          this.ds.userloginstatus = true;
          localStorage.setItem('token', (logdet['token']))
          this.route.navigate([`/studentdashboard/${this.sID}/studentprofile`])
        }
      }
      else {
        alert('please select your role')
      }
    })

  }

}



// if(x1.role=='student')
    // {
    //   this.forstd=true;
    //   this.foradmin=false;
    // }