import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlflow',
  imports: [FormsModule],
  templateUrl: './controlflow.html',
  styleUrl: './controlflow.css',
})
export class Controlflow {
 isOfferCodeAVl : boolean=false;
 isSuccessDivVisible : WritableSignal<boolean> = signal(false);

 toggleDivVisibility(){
  this.isSuccessDivVisible.set(!this.isSuccessDivVisible());
}

}

