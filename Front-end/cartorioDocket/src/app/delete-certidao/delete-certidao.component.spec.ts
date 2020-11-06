import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCertidaoComponent } from './delete-certidao.component';

describe('DeleteCertidaoComponent', () => {
  let component: DeleteCertidaoComponent;
  let fixture: ComponentFixture<DeleteCertidaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCertidaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCertidaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
