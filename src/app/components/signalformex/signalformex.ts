import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email, Field, form, REQUIRED, required } from '@angular/forms/signals';
@Component({
  selector: 'app-signalformex',
  imports: [FormsModule,Field, JsonPipe],
  templateUrl: './signalformex.html',
  styleUrl: './signalformex.css',
})
export class Signalformex {
  loginModel = signal({email:'',password:''});
  // loginForm = form(this.loginModel)
  loginForm = form(this.loginModel,(schema)=>{
  required(schema.email,{message :'Email is requried'}),
  required(schema.password,{message : 'Password is requried'}),
  email(schema.email, {message :  'Email is not in valid format'})
})
  
    
}
