import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css',
})
export class ReactiveUser {
  userForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.maxLength(4)]),
    username: new FormControl("",[Validators.required]),
    email: new FormControl(""),
    password: new FormControl("")
  })
}
