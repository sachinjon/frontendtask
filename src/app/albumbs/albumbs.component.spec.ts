import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumbsComponent } from './albumbs.component';

describe('AlbumbsComponent', () => {
  let component: AlbumbsComponent;
  let fixture: ComponentFixture<AlbumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
