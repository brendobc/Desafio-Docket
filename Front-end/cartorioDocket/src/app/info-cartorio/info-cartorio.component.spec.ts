import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCartorioComponent } from './info-cartorio.component';

describe('InfoCartorioComponent', () => {
  let component: InfoCartorioComponent;
  let fixture: ComponentFixture<InfoCartorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCartorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCartorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
