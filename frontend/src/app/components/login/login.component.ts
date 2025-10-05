import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit 
{
  loginForm!: FormGroup;
  showPassword:boolean=false;
  loginFail:boolean=false;

  constructor(private userService:UserService,private toastService:ToastService,private route:Router)
  {

  }
  ngOnInit(): void 
  {
    this.loginForm = new FormGroup({
      email:new FormControl ('',[Validators.email,Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]+$/)]) 
      
    })
      
  }

  onLogin()
  {
    if(this.loginForm.valid)
    {
      this.userService.login(this.loginForm.value).subscribe(
        (data:any)=>{
          localStorage.setItem('token',data.token)
          this.toastService.showSuccess("Login Successfully !")
          this.route.navigate(['/emp-list'])
        },
        (error)=>{
          if(error.status == 401)
          {
            console.log('Login Failed!');
            this.toastService.showError("OOPS ! Invalid Credentials ")
            this.loginFail = true;
          }
        }
      )
    }
  }

}
