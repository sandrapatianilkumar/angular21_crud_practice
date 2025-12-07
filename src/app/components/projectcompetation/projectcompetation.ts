import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projectcompetation',
  imports: [ReactiveFormsModule],
  templateUrl: './projectcompetation.html',
  styleUrl: './projectcompetation.css',
})
export class Projectcompetation {
  competitionList = signal<Competition[]>([]);
  projectForm: FormGroup = new FormGroup({
    competitionId: new FormControl(0),
    title: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    status: new FormControl('')
  });

  getAllCompetitions() {
    this.http.get('https://api.freeprojectapi.com/api/ProjectCompetition/GetAllCompetition').subscribe({
      next: (res: any) => {
        this.competitionList.set(res)
      }, error: (error: any) => {
        alert(error.message)
      }
    })
  }
  saveCompetition() {
    const formValues = this.projectForm.value;
    this.http.post('https://api.freeprojectapi.com/api/ProjectCompetition/competition', formValues).subscribe({
      next: (res: any) => {
        alert("Competition created successfully");
        this.getAllCompetitions();
      }, error: (error: any) => {
        alert(error.message)
      }
    })
  }

  updateCompetition() {
    const formValues = this.projectForm.value;
    this.http.put('https://api.freeprojectapi.com/api/ProjectCompetition/update/' + formValues.competitionId, formValues).subscribe({
      next: (res: any) => {
        alert("Competition updated successfully");
        this.getAllCompetitions();
      }, error: (error: any) => {
        alert(error.message)
      }
    })
  }

  deleteCompetition(id: number) {
    const isConfirmed = confirm("Are you sure to delete?");
    if (isConfirmed == true) {
      this.http.delete('https://api.freeprojectapi.com/api/ProjectCompetition/delete/' + id).subscribe({
        next: (res: any) => {
          alert("Competition Deleted successfully " + id);
          this.getAllCompetitions();
        }, error: (error: any) => {
          debugger;
          alert(error.message)
        }
      })
    }
  }
  http = inject(HttpClient);
  constructor() {
    this.getAllCompetitions();
  }
  onEdit(item: Competition) {
    this.projectForm = new FormGroup({
      competitionId: new FormControl(item.competitionId),
      title: new FormControl(item.title),
      description: new FormControl(item.description),
      startDate: new FormControl(item.startDate),
      endDate: new FormControl(item.endDate),
      status: new FormControl(item.status)
    });

  }

}

export interface Competition {
  competitionId: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string; //'Completed' | 'Ongoing' | 'Planned';
}

