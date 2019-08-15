import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
    selector: 'starter-template-form',
    templateUrl: './starterTemplateForm.component.html'
})
export class StarterTemplateFormComponent implements OnInit {
    customer: any;
    message: string;
    public employees = [];

    constructor(private _employeeService: EmployeeService) { }

    ngOnInit() { 
        this.customer = {
            firstName: 'Please Enter Something'
        };

        this._employeeService.getEmployee()
            .subscribe(data => this.employees = data);
    }

    onSubmit() {
        this.message = 'You typed: ' + this.customer.firstName;
    }

}