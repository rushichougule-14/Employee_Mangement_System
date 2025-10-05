import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform 
{
  transform(employee: any[], searchText:string): any[] 
  {
    if(!employee)
    {
      return [];
    }
    if(!searchText)
    {
      return employee;
    }
    searchText = searchText.toLowerCase();
    return employee.filter(emp=>
      emp.name.toLowerCase().includes(searchText) ||
      emp.department.toLowerCase().includes(searchText)
    );
  } 

}
