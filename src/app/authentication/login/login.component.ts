import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/interface/IUser';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private localstorageService:LocalstorageService 
  ) {
    this.loginform = fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
  loginUser() {
    this.userService
      .login(this.loginform.value as IUser)
      .subscribe({
        next: (response: any) => {
          this.localstorageService.setToken(response.content.accessToken);
          this.localstorageService.setRole(response.content.role);
          this.localstorageService.setName(response.content.name);
          Swal.fire({
            icon: "success",
            title: "USER LOGGED IN SUCESSFULLY",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['']);
        },
        error: (err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.error.content,
          });
        },
      });
  }
  onSubmit() {
    if (this.loginform.valid) {
      this.loginUser();
    } else {
      alert(this.loginform.errors);
    }
  }
}
