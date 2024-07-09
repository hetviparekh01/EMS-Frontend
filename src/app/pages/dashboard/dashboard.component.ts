import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { EventService } from 'src/app/core/services/event.service';
import { CustomRendererComponent } from 'src/app/shared/custom-renderer/custom-renderer.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  eventData!: any;
  constructor(private eventService: EventService, private router: Router) {}
  ngOnInit(): void {
    this.getEvents();
  }
  cloumDefs: ColDef[] = [
    { headerName: 'EventName', field: 'name', flex: 2 },
    { headerName: 'Location', field: 'location', flex: 2 },
    { headerName: 'Description', field: 'description', flex: 3 },
    { headerName: 'Fees', field: 'fees', flex: 2 },
    { headerName: 'Date', field: 'date', flex: 2 },
    { headerName: 'Total Registered User', field: 'totalUser', flex: 2 },
    {
      headerName: '',
      field: '',
      flex: 3,
      cellRenderer: CustomRendererComponent,
      cellRendererParams: {
        viewBtn: (id: string) => this.viewEvent(id),
        updateBtn: (id: string) => this.updateEvent(id),
        deleteBtn: (id: string) => this.deleteEvent(id),
      },
    },
  ];
  viewEvent(id: string) {
    this.router.navigate([`/viewevent/${id}`]);
  }
  updateEvent(id: string) {
    this.router.navigate([`/addevent/${id}`]);
  }
  deleteEvent(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventService.deleteEvent(id).subscribe({
          next: (response: any) => {
            Swal.fire({
              icon: 'success',
              title: response.content,
              showConfirmButton: false,
              timer: 1500,
            });
            this.getEvents();
          },
          error: (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error.content,
            });
          },
        });
      }
    });
  }
  getEvents() {
    this.eventService.getEvents().subscribe({
      next: (response) => {
        this.eventData = response.content;
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.content,
        });
      },
    });
  }
}
