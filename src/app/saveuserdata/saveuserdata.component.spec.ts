import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveuserdataComponent } from './saveuserdata.component';

describe('SaveuserdataComponent', () => {
  let component: SaveuserdataComponent;
  let fixture: ComponentFixture<SaveuserdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveuserdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveuserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
