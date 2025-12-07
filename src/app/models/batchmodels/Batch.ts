export class Batch {
  batchId: number;
  batchName: string;
  createdDate: Date

  constructor() {
    this.batchId = 0;
    this.batchName = '';
    this.createdDate = new Date();
  }
}