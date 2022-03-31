import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperHandbookComponent } from './developer-handbook.component';

describe('DeveloperHandbookComponent', () => {
  let component: DeveloperHandbookComponent;
  let fixture: ComponentFixture<DeveloperHandbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperHandbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperHandbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
