import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-judge',
  templateUrl: './form-judge.component.html',
  styleUrls: ['./form-judge.component.scss']
})
export class FormJudgeComponent implements OnInit {
  categories = ['Difficulty', 'Execution'];
  categoryHasError = true;


  constructor(private fb: FormBuilder) { }


  registrationForm = this.fb.group({
    firstName: ['', Validators.required],
    middleName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: [''],
    category: ['default', Validators.required],
    licenseNumber: ['', Validators.pattern('^[0-9]*$')]
  });

  // this is a alternative way to create Forms
  // registrationForm= new FormGroup({
  //   firstName: new FormControl (''),
  //   middleName: new FormControl (''),
  //   lastName: new FormControl (''),
  //   category: new FormControl (''),
  //   licenseNumber: new FormControl (Number())
  // });
  ngOnInit() { }

  validateCategory(value) {
    if (value === 'default') {
      this.categoryHasError = true;
    } else {
      this.categoryHasError = false;
    }

    // (value==='default') ? this.categoryHasError=true : this.categoryHasError=false;

    // GOOD for debugging !!!!
    // console.log(value);
    // console.log('error ' + this.categoryHasError);
    // console.log(value==='default');
  }
}
