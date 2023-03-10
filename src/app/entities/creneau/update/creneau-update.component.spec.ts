import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreneauUpdateComponent } from './creneau-update.component';

describe('CreneauUpdateComponent', () => {
  let component: CreneauUpdateComponent;
  let fixture: ComponentFixture<CreneauUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreneauUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreneauUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
