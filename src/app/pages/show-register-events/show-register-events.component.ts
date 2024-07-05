import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { RegisterService } from 'src/app/core/services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-register-events',
  templateUrl: './show-register-events.component.html',
  styleUrls: ['./show-register-events.component.scss']
})
export class ShowRegisterEventsComponent implements OnInit {
ngOnInit(): void {
  this.getRegisterEventByUserId()
}
constructor(private registerService:RegisterService){}
registerData: any;
cloumDefs: ColDef[] = [
  { headerName: 'EventName', field: 'eventDetails.name' ,flex:2  },
  { headerName: 'Location', field: 'eventDetails.location', flex:2},
  { headerName: 'Fees', field: 'eventDetails.fees', flex:2},
  { headerName: 'Date', field: 'eventDetails.date', flex:2},
];
getRegisterEventByUserId(){
  this.registerService.getRegisterEventByUserId().subscribe({
    next:(response)=>{
      this.registerData=response.content
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
}
