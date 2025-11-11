import { Component, OnInit } from '@angular/core';
import { WrapperComponent } from '../common/components/wrapper/wrapper.component';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import {
  age38,
  Dinosaur,
  dinosaurs,
  embryo,
  skeleton,
} from '../common/model/dinosaur';
import { GoBackButtonComponent } from '../common/components/go-back-button/go-back-button.component';
import { environment } from '../../environments/environment';
import { getRandomInt, mapRange } from '../common/functions/math';

@Component({
  selector: 'app-you-are-a-dinosaur',
  imports: [
    WrapperComponent,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    GoBackButtonComponent,
  ],
  templateUrl: './you-are-a-dinosaur.component.html',
  styleUrl: './you-are-a-dinosaur.component.css',
})
export class YouAreADinosaurComponent implements OnInit {
  title = 'You are a Dinosaur!';

  age?: number;
  dinosaur?: Dinosaur;
  form: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.form = new FormGroup({
      dinosaurName: new FormControl(),
    });

    const ageParameter = this.route.snapshot.paramMap.get('age');
    const age = Number(ageParameter);
    const _if_ = Number.isInteger(age);
    if (!_if_) {
      this.router.navigate([`/`]);
      return;
    }

    if (age < 0) {
      this.router.navigate([`/`]);
    }

    this.age = age;
  }

  ngOnInit(): void {
    this.calculateDinosaur();
  }

  get randomDinosaurImageSrc() {
    if (!this.dinosaur) {
      const message = `Dinosaur is not available.`;
      console.error(message);
      throw new Error(message);
    }

    const numberOfDinosaurImages = this.dinosaur.imageSrcs.length;
    const dinosaurImageRandomIndex = getRandomInt(0, numberOfDinosaurImages);

    const dinosaurImageSrc = this.dinosaur.imageSrcs.at(
      dinosaurImageRandomIndex
    );

    if (!dinosaurImageSrc) {
      const message = `Dinosaur image src is not available.`;
      console.error(message);
      throw new Error(message);
    }

    return dinosaurImageSrc;
  }

  calculateDinosaur() {
    if (this.age === undefined) return;

    if (this.age === 38) {
      this.dinosaur = age38;
      return;
    }

    if (this.age > environment.maximumAgeEverRecordedYears) {
      this.dinosaur = skeleton;
      return;
    }

    if (this.age < 25) {
      this.dinosaur = embryo;
      return;
    }

    const numberOfDinosaurs = dinosaurs.length;
    const dinosaurIndex = mapRange(
      this.age,
      0,
      environment.maximumAgeEverRecordedYears + 1,
      0,
      numberOfDinosaurs
    );

    const dinosaur = dinosaurs.at(dinosaurIndex);
    if (dinosaur) {
      this.dinosaur = dinosaur;
    }
  }
}
