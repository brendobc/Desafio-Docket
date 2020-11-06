import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCartorioComponent } from './delete-cartorio.component';

describe('DeleteCartorioComponent', () => {
  let component: DeleteCartorioComponent;
  let fixture: ComponentFixture<DeleteCartorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCartorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCartorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
