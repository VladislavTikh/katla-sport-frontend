import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { EmployeeFullInfo } from '../models/employee-full-info';

@Component({
  selector: 'app-employee-subordinates-list',
  templateUrl: './employee-subordinates-list.component.html',
  styleUrls: ['./employee-subordinates-list.component.css']
})
export class EmployeeSubordinatesListComponent implements OnInit {

  employeeId: number;
  subordinates: EmployeeFullInfo[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.employeeId = p['id'];
      this.employeeService.getSubordinates(this.employeeId).subscribe(s => this.subordinates = s);
    })
  }
}