import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertidaoComponent } from './certidao.component';

describe('CertidaoComponent', () => {
  let component: CertidaoComponent;
  let fixture: ComponentFixture<CertidaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertidaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertidaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
