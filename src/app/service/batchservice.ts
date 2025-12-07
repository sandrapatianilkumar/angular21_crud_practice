import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Batch } from '../models/batchmodels/Batch';
@Injectable({
  providedIn: 'root',
})
export class Batchservice {

  http = inject(HttpClient);
  BATCH_BASE_URL: string = 'https://api.freeprojectapi.com/api/FeesTracking/batches/';

  getAllBatches() {
    return this.http.get(this.BATCH_BASE_URL);
  }

  saveBatch(req: Batch) {
    return this.http.post(this.BATCH_BASE_URL, req);
  }
  updateBatch(batchId: number, req: Batch) {
    return this.http.put(this.BATCH_BASE_URL + batchId, req);
  }

  deleteBatch(id: number) {
    return this.http.delete(this.BATCH_BASE_URL + id);
  }
}
