import { Component } from '@angular/core';
// import { User } from './user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  success = '';
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
  };
  onSubmit(){
    console.log(this.user);
    this.success = `Thank you for registering with us ${ this.user.firstName}`;
  }

 
}


