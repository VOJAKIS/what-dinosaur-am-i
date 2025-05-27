import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouAreADinosaurComponent } from './you-are-a-dinosaur.component';

describe('YouAreADinosaurComponent', () => {
  let component: YouAreADinosaurComponent;
  let fixture: ComponentFixture<YouAreADinosaurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YouAreADinosaurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouAreADinosaurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
