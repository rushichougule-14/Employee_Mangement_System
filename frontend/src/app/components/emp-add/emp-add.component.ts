import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { EmpService } from '../../services/emp.service';
import { Route, Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrl: './emp-add.component.css'
})
export class EmpAddComponent implements OnInit{
  empForm! :FormGroup
  departments: string[] = ["HR", "Finance", "IT", "Marketing", "Marketing","Design","Sales","Dev-Team"]; 


  constructor(private empService:EmpService,private route:Router,private toastService:ToastService)
  {

  }
  ngOnInit(): void {
      this.empForm = new FormGroup({
        empId:new FormControl(),
        name:new FormControl('',[Validators.required,Validators.minLength(3)]),
        email:new FormControl('',[Validators.email]),
        position:new FormControl('',[Validators.required]),
        department:new FormControl('',[Validators.required])
      });
  }

  OnSubmit()
  {
    if(this.empForm.valid)
    {
      const formData = this.empForm.value;
      console.log(formData);

      this.empService.addEmployee(formData).subscribe(
        (data)=>{
          this.route.navigate(['emp-list']);
          this.toastService.showSuccess("Employee Added Successfully !");
          console.log("Employee Added SuccessFully",data);
        },
        (error)=>{
          this.toastService.showError("Something Went Wrong!")
          console.error("Error adding employee",error);
        }
      )

    }
  }

}
