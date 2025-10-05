import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { EmpService } from '../../services/emp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrl: './emp-edit.component.css'
})

  export class EmpEditComponent implements OnInit {

  empForm!: FormGroup;
  empId! :number;

  departments: string[] = ["HR", "Finance", "IT", "Marketing", "Marketing","Design","Sales","Dev-Team"]; 

  constructor(private empService:EmpService,private router:Router, private route:ActivatedRoute,private toastService:ToastService) {}

  ngOnInit(): void {
    this.empForm = new FormGroup({
    empId:new FormControl(),
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.email]),
    position:new FormControl('',[Validators.required]),
    department:new FormControl('',[Validators.required])
    });

    this.route.paramMap.subscribe(param =>{
    let id = Number(param.get('empId'));
    this.empId = id;
    this.getByEmpId(id);
  });
  
}
  getByEmpId(id:number)
  {
    this.empService.getEmpById(id).subscribe(emp=>{
      this.empForm.patchValue(emp);
    });
  }

  onSubmit() {
    if (this.empForm.valid) {
      console.log("Form Submitted:", this.empForm.value);
      this.empService.updateEmployee(this.empForm.value,this.empId).subscribe(
        (data)=>{
          //console.log("Employee Updated Successfully",data);
          this.toastService.show("Employee details updated Successfully !");
          this.router.navigate(['emp-list'])
        },
        (error)=>{
          console.error("Error Updating task",error);
          this.toastService.showError("Update Failed !");
        }
      )
      // call update API here
    } else {
      this.empForm.markAllAsTouched();
    }
  }
}
