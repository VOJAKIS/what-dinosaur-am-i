import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotADinosaurComponent } from './not-a-dinosaur.component';

describe('NotADinosaurComponent', () => {
  let component: NotADinosaurComponent;
  let fixture: ComponentFixture<NotADinosaurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotADinosaurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotADinosaurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
