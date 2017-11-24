import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: '../view/menu.component.html',
  styleUrls: ['../styles/menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Home(){
    this.router.navigate(['/']);
  }

  Register(){
    this.router.navigate(['/register']);
  }

  SignIn(){
    this.router.navigate(['/login']);
  }

  UserHome(){

  }

  SignOut(){

  }

  Mobile(){
    
    var back  = (<HTMLInputElement>document.getElementById('backgroundMenu')).className;
    if(back=='backgroundMenu'){
      (<HTMLInputElement>document.getElementById('backgroundMenu')).className += " res";
    } else {
      (<HTMLInputElement>document.getElementById('backgroundMenu')).className = "backgroundMenu";
    }
  }
}
