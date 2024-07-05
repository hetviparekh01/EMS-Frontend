import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/core/services/event.service';
import { RegisterService } from 'src/app/core/services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss']
})
export class ViewEventComponent implements OnInit {
  event: any;

ngOnInit(): void {
  this.getEventById()
}
eventId=this.activatedRoute.snapshot.paramMap.get('id') as string
constructor(private eventService:EventService,private activatedRoute:ActivatedRoute,private registerService:RegisterService){}
  getEventById(){
    this.eventService.getEventById(this.eventId).subscribe({
      next:(response:any)=>{
        this.event=response.content
      },
      error:(error)=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error.content,
        });
      }
    })
  }
  register() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Register it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.registerService.registerEvent({eventId:this.eventId}).subscribe({
          next:(response:any)=>{
            Swal.fire({
              icon: "success",
              title: response.content,
              showConfirmButton: false,
              timer: 1500
            });
          },
          error:(error)=>{
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text:error.error.content, 
            });
          }
        })
      }
    });
  }
}
