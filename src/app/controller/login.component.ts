import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: '../view/login.component.html',
  styleUrls: ['../styles/login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
    SignIn(){
      this.router.navigate(['/user']);
    }
  
    Cancel(){
      this.router.navigate(['/']);
    }

}
