import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class SignalComponent {

  courseName = signal("Angular course");
  rollNo = signal(123);
  student = signal({name:'anil',qualifiction:'MCA'});
  studentList = signal(['Anil','Kumar','Sandrapati']);
  flag = signal(true);

  constructor(){
    setTimeout(() => {
      console.log("before : " + this.courseName());
      this.courseName.set("React Course");
      console.log("after : " + this.courseName());
    }, 3000);
  }

}
