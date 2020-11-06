import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutCartorioComponent } from './put-cartorio.component';

describe('PutCartorioComponent', () => {
  let component: PutCartorioComponent;
  let fixture: ComponentFixture<PutCartorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutCartorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutCartorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
