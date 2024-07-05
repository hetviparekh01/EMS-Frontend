import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupform!:FormGroup;
  constructor(private fb:FormBuilder,private userServie:UserService,private router:Router){}
  ngOnInit(): void {
    this.signupform=this.fb.group({
      name:['',Validators.compose([Validators.required])],
      email:['',Validators.compose([Validators.required])],
      password:['',Validators.compose([Validators.required])],
      role:['',Validators.compose([Validators.required])]
    })
  }
  onSubmit() {
    this.userServie.signUp(this.signupform.value).subscribe({
      next:(response:any)=>{
        Swal.fire({
          icon: "success",
          title: response.content,
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/auth/login']);
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
