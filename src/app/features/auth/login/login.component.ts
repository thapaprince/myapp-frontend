import { Component } from '@angular/core';

import { loginRequest } from 'src/app/core/models/auth.model';

import { AuthService } from 'src/app/core/services/auth.service';

import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  formData: loginRequest = {
    email: '',
    password: ''
  }
  constructor(private authService: AuthService, private router: Router) {

  }

  // onLogin(data:any) {
  //   console.log("data..",data);
  //   this.authService.login(this.formData).subscribe({
  //     next:(response)=>{
  //       console.log(response);
  //     },
  //     error:(err)=>{
  //       console.log(err);
  //     }
  //   })
  // }

  onLogin(form: NgForm) {
    this.authService.login(this.formData).subscribe({
      next: (response) => {
        console.log(response);
        sessionStorage.setItem('user', JSON.stringify(response.data));
        // this.router.navigate(['/profile']);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err)
      }
    })

  }

}
