import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dynamic-css-class',
  imports: [FormsModule, NgClass, CommonModule, NgStyle],
  templateUrl: './dynamic-css-class.html',
  styleUrl: './dynamic-css-class.css',
})
export class DynamicCssClass {
  myClassName : String =  'bg-warning';
   isActive: boolean = false; 
   productPrice : number = 500;
   divBlackColor:String = '';

   myCss = {
    'background':'black',
    'color' : 'red',
    'font-size':'32px'
   }
}
