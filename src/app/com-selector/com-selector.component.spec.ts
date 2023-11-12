import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComSelectorComponent } from './com-selector.component';

describe('ComSelectorComponent', () => {
  let component: ComSelectorComponent;
  let fixture: ComponentFixture<ComSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
