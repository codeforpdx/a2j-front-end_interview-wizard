import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDocumentsListComponent } from './user-documents-list.component';

describe('UserDocumentsListComponent', () => {
  let component: UserDocumentsListComponent;
  let fixture: ComponentFixture<UserDocumentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDocumentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDocumentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
