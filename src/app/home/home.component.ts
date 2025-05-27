import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { WrapperComponent } from '../common/components/wrapper/wrapper.component';
import { config } from '../common/config';

@Component({
  selector: 'app-home',
  imports: [FormsModule, ReactiveFormsModule, WrapperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Am I a Dinosaur?';

  form: FormGroup;

  config = config;

  constructor(private router: Router) {
    this.form = new FormGroup({
      age: new FormControl(undefined, [
        Validators.min(0),
        Validators.max(this.config.maximumAgeYears),
        Validators.required,
      ]),
    });
  }

  get age() {
    const age = this.ageFormControl.value;
    return age;
  }

  get year() {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  }

  get ageFormControl() {
    const formControl = this.form.controls[`age`];
    return formControl;
  }

  get formErrors() {
    const errors = this.ageFormControl.errors;
    return errors !== null;
  }

  onSubmit() {
    this.form.markAsTouched();
    this.form.markAsDirty();

    if (this.formErrors) {
      return;
    }

    if (2000 > this.year - this.age) {
      this.router.navigate([`dinosaur/${this.age}`]);
    } else {
      this.router.navigate([`not-a-dinosaur`]);
    }
  }
}
