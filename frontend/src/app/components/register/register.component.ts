import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit
{
  signupForm!:FormGroup;

  constructor(private userService:UserService,private router:Router,private toastService:ToastService)
  {

  }
  ngOnInit(): void 
  {
    this.signupForm = new FormGroup({
      fullName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]) 
    }) 
  }
  onSignUp()
  {
    if(this.signupForm.valid)
    {
      const form = this.signupForm.value;
      console.log(form);
      this.userService.register(form).subscribe(
        (data:any)=>{
        this.router.navigate(['/']);
        this.toastService.showSuccess("User Registered Successfully");
      },
      (error:any)=>{
        console.log(error)
      }
    )
    }
  }

}
