import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Batch } from '../../models/batchmodels/Batch';
import { Batchservice } from '../../service/batchservice';
@Component({
  selector: 'app-batchmaster',
  imports: [FormsModule, DatePipe, NgIf, NgFor],
  templateUrl: './batchmaster.html',
  styleUrl: './batchmaster.css',
})
export class Batchmaster {

  batchService = inject(Batchservice);

  newBatchObj: Batch = new Batch();
  batch: Batch = new Batch();
  isEdit = false;
  http = inject(HttpClient);
  batchList = signal<Batch[]>([]);
  ngOnInit(): void {
    this.getAllBatches();
  }
  getAllBatches() {
    this.batchService.getAllBatches().subscribe({
      next: (res: any) => {
        this.batchList.set(res);
      },
      error: (error: any) => {
        alert(error.error.message);
      }
    })
  }
  OnSaveOrUpdateBatch() {
    if (this.newBatchObj?.batchId == 0) {
      this.onSaveBatch();
    } else {
      this.onUpdateBatch();
    }
    this.resetForm();
  }
  onSaveBatch() {
    this.batchService.saveBatch(this.newBatchObj).subscribe({
      next: (result: any) => {
        alert('Batch created successfully');
        this.getAllBatches();
      },
      error: (error: any) => {
        alert(error?.error?.message);
      }
    })
  }
  onUpdateBatch() {
    this.batchService.updateBatch(this.newBatchObj.batchId, this.newBatchObj).subscribe({
      next: (result: any) => {
        alert('Batch updated successfully');
        this.getAllBatches();
      },
      error: (error: any) => {
        alert(error?.error?.message);
      }
    })
  }
  onDeleteBatch(id: number) {
    const isConfirmed = confirm("Are your sure to Delete");
    if(isConfirmed==true) {
      this.batchService.deleteBatch(id).subscribe({
      next: (result: any) => {
        alert('Batch deleted successfully ' + id);
        this.getAllBatches();
      },
      error: (error: any) => {
        alert(error?.error?.message);
      }
    })
    }
  }

  onEditBatch(data: Batch) {
    this.isEdit = true;
    const strData = JSON.stringify(data);
    const strObj = JSON.parse(strData);
    this.newBatchObj = strObj;
  }

  resetForm() {
    this.batch = new Batch();
    this.newBatchObj = new Batch();
    this.isEdit = false;
  }

  // batchList: Batch[] = [];

  // saveBatch() {
  //   if (this.isEdit) {
  //     // Update existing
  //     const index = this.batchList.findIndex(x => x.batchId === this.batch.batchId);
  //     if (index > -1) this.batchList[index] = { ...this.batch };
  //     this.isEdit = false;
  //   } else {
  //     // Add new
  //     this.batch.batchId = this.batchList.length + 1;
  //     this.batchList.push({ ...this.batch });
  //   }
  //   this.batch = new Batch();
  // }

  // editBatch(b: Batch) {
  //   this.batch = { ...b };
  //   this.isEdit = true;
  // }

  // deleteBatch(id: number) {
  //   // this.batchList = this.batchList.filter(b => b.batchId !== id);
  // }

}
