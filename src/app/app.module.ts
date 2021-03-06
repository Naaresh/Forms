import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RequiredTextboxComponent } from './controlValueAccessor/required-textbox.component';
import { PhoneTextboxComponent } from './controlValueAccessor/phone-textbox.component';
import { CamelToTitlePipe } from './shared/camel-to-title.pipe';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './shared/employee.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule ],
  providers: [EmployeeService],
  declarations: [ AppComponent, AppRoutingModule.components, RequiredTextboxComponent, PhoneTextboxComponent, CamelToTitlePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }