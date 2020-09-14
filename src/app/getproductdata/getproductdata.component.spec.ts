import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetproductdataComponent } from './getproductdata.component';

describe('GetproductdataComponent', () => {
  let component: GetproductdataComponent;
  let fixture: ComponentFixture<GetproductdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetproductdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetproductdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
