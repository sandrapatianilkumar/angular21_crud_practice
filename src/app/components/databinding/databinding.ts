import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {

  courseName: String = "Angular 21 special edition";

  cityName: String = "Hyderabad";

  className = "primary";
  inputText = "text";
  welcomeMessage() {
    alert("welcome to angular");
  }

  startChanged() {
    alert("state changed");
  }
  changeCourse(data: string) {
    this.courseName = data;
  }

  constructor() {
    this.className = "secondary"
    this.inputText = "button"
  }
}
