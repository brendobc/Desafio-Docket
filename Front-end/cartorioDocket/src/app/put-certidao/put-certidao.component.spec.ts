import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutCertidaoComponent } from './put-certidao.component';

describe('PutCertidaoComponent', () => {
  let component: PutCertidaoComponent;
  let fixture: ComponentFixture<PutCertidaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutCertidaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutCertidaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
