import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: '../view/register.component.html',
  styleUrls: ['../styles/register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Register(){
    this.router.navigate(['/']);
  }

  Cancel(){
    this.router.navigate(['/']);
  }
}
