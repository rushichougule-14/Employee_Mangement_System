import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpEditComponent } from './components/emp-edit/emp-edit.component';
import { EmpDeleteComponent } from './components/emp-delete/emp-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpAddComponent } from './components/emp-add/emp-add.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmployeeFilterPipe } from './pipes/employee-filter.pipe';
import { HeadersComponent } from './components/headers/headers.component';
import { FootersComponent } from './components/footers/footers.component';
import {
  NgxUiLoaderModule,
  NgxUiLoaderHttpModule,
  NgxUiLoaderRouterModule,
  NgxUiLoaderConfig,
} from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text: 'Please Wait....',
  textColor: '#0D6EFD',
  textPosition: 'center-center',
  pbThickness: 5,
  pbDirection: 'ltr',
  hasProgressBar: true,
  fgsType: 'ball-spin-clockwise',
  fgsColor: '#0D6EFD',
  overlayColor: 'rgba(255,255,255,0.8)',
};
@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpEditComponent,
    EmpDeleteComponent,
    EmpAddComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundComponent,
    EmployeeFilterPipe,
    HeadersComponent,
    FootersComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
