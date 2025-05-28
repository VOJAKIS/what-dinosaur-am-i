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

  constructor(private router: Router, private route: ActivatedRoute) {
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

  get randomDinosaurSrc() {
    if (!this.dinosaur) {
      return;
    }

    const numberOfDinosaurImages = this.dinosaur.imageSrcs.length;
    const dinosaurImageRandomIndex = this.getRandomInt(
      0,
      numberOfDinosaurImages
    );

    const dinosaurImageSrc = this.dinosaur.imageSrcs.at(
      dinosaurImageRandomIndex
    );

    if (!dinosaurImageSrc) {
      console.error(`Dinosaur image src is not available.`);
      throw new Error();
    }

    return dinosaurImageSrc;
  }

  calculateDinosaur() {
    if (!this.age) return;

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
    const dinosaurIndex = this.mapRange(
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

  /**
   * Premapuje hodnotu x z intervalu [a1, a2] na interval [b1, b2].
   *
   * @param x Vstupná hodnota, ktorá sa má premapovať.
   * @param a1 Dolná hranica vstupného intervalu.
   * @param a2 Horná hranica vstupného intervalu.
   * @param b1 Dolná hranica výstupného intervalu.
   * @param b2 Horná hranica výstupného intervalu.
   * @returns Hodnota premapovaná do výstupného intervalu.
   */
  mapRange(x: number, a1: number, a2: number, b1: number, b2: number): number {
    // Lineárna interpolácia
    // Najprv normalizujeme x do rozsahu [0, 1] v rámci vstupného intervalu
    const normalizedX = (x - a1) / (a2 - a1);

    // Potom túto normalizovanú hodnotu škálujeme na výstupný interval
    const mappedValue = b1 + normalizedX * (b2 - b1);

    return mappedValue;
  }

  getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
}
