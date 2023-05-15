import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from '../child/child.component';

import { ParentComponent } from './parent.component';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  let para:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentComponent, ChildComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    para= fixture.debugElement.nativeElement.querySelector("#p1");
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
it('should display title in para',()=>{
  fixture.detectChanges();
  expect(para.textContent).toContain('TechM');
});

});
