import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { EmployeeFullInfo } from '../models/employee-full-info';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  existed = false;
  employee = new EmployeeFullInfo(0, "", "", 1, 5, "");
  filetoUpload:File=null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeSerivce: EmployeeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === undefined) return;
      this.employeeSerivce.getEmployee(p['id']).subscribe(h => this.employee = h);
      this.existed = true;
    });
  }

  navigateToEmployees() {
    this.router.navigate(['/employees']);
  }

  onCancel() {
    this.navigateToEmployees();
  }
  
  onSubmit() {
    if (this.existed) {
      this.employeeSerivce.updateEmployee(this.employee,this.filetoUpload).subscribe(h => this.navigateToEmployees());
    } 
    else {
      this.employeeSerivce.addEmployee(this.employee,this.filetoUpload).subscribe(h => this.navigateToEmployees());
    }
  }

  onPurge() {
    this.employeeSerivce.deleteEmployee(this.employee.id).subscribe(h => this.navigateToEmployees());
  }

  DisplayFileToUpload(file:HTMLInputElement) {
    var selectedFile = file.value;
    var html = "";
    html = "<h3>Image(s) to Upload</h3>"
        html += "File: ";
        html += selectedFile+ "<br>";

      html += "<div style='position:relative' class='fileUpload btn btn-primary'><span>Upload</span><input type='submit' style='cursor:pointer;opacity:0;position:absolute;left:0' value='Upload'/></div>"
    document.getElementById("FilesToUpload").innerHTML = html;
  } 

  handleFileInput(file:FileList){
    this.filetoUpload=file.item(0);
    var selectedFile = file.item(0).name;
    var html = "";
    html = "<h3>Image(s) to Upload</h3>"
        html += "File: ";
        html += selectedFile+ "<br>";

      html += "<div style='position:relative' class='fileUpload btn btn-primary'><span>Upload</span><input type='submit' style='cursor:pointer;opacity:0;position:absolute;left:0' value='Upload'/></div>"
    document.getElementById("FilesToUpload").innerHTML = html;
  }
}
