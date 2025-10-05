import { Component, OnInit } from '@angular/core';
import { employees } from '../../models/Emp.modal';
import { EmpService } from '../../services/emp.service';
import { Router } from '@angular/router';
import { EmpDeleteComponent } from '../emp-delete/emp-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit
{
  emp:employees[] = [];
  empId!:number;
  searchText:string='';
  

  constructor(private empService:EmpService,private toastService:ToastService,private router:Router,private dialog:MatDialog)
  {

  }

  ngOnInit():void
  {
    this.getAllEmployees();
  }

  getAllEmployees()
  {
    this.empService.getAllEmployee().subscribe((data=>{
      const token = localStorage.getItem('token');
      this.emp = data;
    }))
  }

  onEdit()
  {

  }

  onDelete(emp:any)
  {
    const dialogref = this.dialog.open(EmpDeleteComponent,{
      width:'350px',
      data:{name:emp.name}
    });

    dialogref.afterClosed().subscribe(result=>{
      if(result)
      {
        console.log()
        this.empService.deleteEmployee(emp.empId).subscribe(()=>{
          console.log("Delete Success",emp.empId);
          this.toastService.showSuccess("Employee record deleted !");
          this.getAllEmployees();
        })
       
      }
    })
  }

  logOut()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
    this.toastService.showError("You have been logged out successfully !");
  }

}
