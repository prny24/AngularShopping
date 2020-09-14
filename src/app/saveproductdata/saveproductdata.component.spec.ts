import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveproductdataComponent } from './saveproductdata.component';

describe('SaveproductdataComponent', () => {
  let component: SaveproductdataComponent;
  let fixture: ComponentFixture<SaveproductdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveproductdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveproductdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
