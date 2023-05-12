import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';

fdescribe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;
  let para: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    para = fixture.debugElement.nativeElement.querySelector(".p1");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display input mesaage to para', () => {
    component.message = "India";
    fixture.detectChanges();
    expect(para.textContent).toBe("India");
  })
  it('should send @output to parent component from text input', () => {

    const clickButton = fixture.nativeElement.querySelector('button');
    const textInput = fixture.nativeElement.querySelector('input');
    spyOn(component.changeEvent,'emit');
    textInput.value = 'Angular';
    clickButton.click();   
    fixture.detectChanges();
   // component.changeEvent.emit('Angular'); // explictly call emit
    expect(component.changeEvent.emit).toHaveBeenCalledWith(textInput.value);
  });

});
