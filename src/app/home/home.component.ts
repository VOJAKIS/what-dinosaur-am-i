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
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  imports: [FormsModule, ReactiveFormsModule, WrapperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Am I a Dinosaur?';

  form: FormGroup;

  constructor(private router: Router) {
    this.form = new FormGroup({
      ageOrYearOfBirth: new FormControl(undefined, [
        Validators.min(0),
        Validators.max(this.year),
        Validators.required,
      ]),
    });
  }

  get ageOrYearOfBirth() {
    const ageOrYearOfBirth = this.ageOrYearOfBirthFormControl.value;
    return ageOrYearOfBirth;
  }

  get year() {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  }

  get ageOrYearOfBirthFormControl() {
    const formControl = this.form.controls[`ageOrYearOfBirth`];
    return formControl;
  }

  get formErrors() {
    const errors = this.ageOrYearOfBirthFormControl.errors;
    return errors !== null;
  }

  onSubmit() {
    this.form.markAsTouched();
    this.form.markAsDirty();

    if (this.formErrors) {
      return;
    }

    if (this.ageOrYearOfBirth > environment.maximumAgeEverRecordedYears) {
      const year = this.year - this.ageOrYearOfBirth;
      this.router.navigate([`dinosaur/${year}`]);
    } else {
      this.router.navigate([`dinosaur/${this.ageOrYearOfBirth}`]);
    }
  }
}
