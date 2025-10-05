import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService 
{
  toasts :any[] = []

  show(message:string,type:'success' | 'error' | 'warning' |'info'='info') {
    this.toasts.push({message,type});
    setTimeout(()=>this.toasts.shift(),5000);
   }

  showSuccess(message:string)
   {
    this.show(message,'success')
   }
   showError(message:string)
   {
    this.show(message,'error');
   }
   showWarning(message:string)
   {
    this.show(message,'warning');
   }

}
