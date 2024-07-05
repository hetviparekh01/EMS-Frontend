import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/core/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
eventForm!: FormGroup;
isUpdate: boolean = false;
isSubmit: boolean = true;
constructor(private fb:FormBuilder,private eventService:EventService,private activatedRoute:ActivatedRoute){}
eventId=this.activatedRoute.snapshot.paramMap.get('id') as string
  ngOnInit(): void {
    this.eventForm=this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      location: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      date: ['', Validators.compose([Validators.required])],
      fees: ['', Validators.compose([Validators.required])],
    })
    if (this.eventId) {
      this.isUpdate = true;
      this.isSubmit = false;
      this.getEventById();
    }
  }
  getEventById(){
    this.eventService.getEventById(this.eventId).subscribe({
      next:(response:any)=>{
        this.eventForm.patchValue({
          name: response.content.name,
          location: response.content.location,
          description: response.content.description,
          fees: response.content.fees,
          date: response.content.date
        });
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
onSubmit() {
  if(this.eventForm.valid){
    if (this.isSubmit){
      this.eventService.addEvent(this.eventForm.value).subscribe({
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
            text: error.error.content,
          });
        }
      })
    }else{
      this.eventService.updateEvent(this.eventForm.value,this.eventId).subscribe({
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
            text: error.error.content,
          });
        }
      })
    }
    this.eventForm.reset()
  }
}

}
