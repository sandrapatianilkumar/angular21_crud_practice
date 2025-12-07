import { Component } from '@angular/core';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {

  myContactName:string = "Anilkumar";
  flag:boolean = true;
  rollno:number = 123;
  currentDate : Date = new Date();
  cityList: string[] = ["pune","Madras","Hyderabad"];
  numList: number[] =[123,45,85,46];
  studentObject = {
    name: 'Anilkuamr S',
    number: 9703080123,
    email:'sandrapati@gmail.com'
  }

  studentList = [
    {name:"anil",city:"hyderabad"},
    {name:"kumar",city:'madras'},
    {name:"sandrapati",city:'New york'}
  ]

  constructor(){
    this.rollno=696
  }

}
