import { Component } from '@angular/core';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private toastServie:ToastService)
  {

  }
  get toasts()
  {
    return this.toastServie.toasts
  }
}
