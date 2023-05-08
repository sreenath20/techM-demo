import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingHarness } from '@angular/router/testing';
import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {

  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let debug:DebugElement;
  let p:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ BannerComponent ],
      providers:[{provide:ComponentFixtureAutoDetect,useValue:true}]
    })
    .compileComponents();    
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
   // debug=fixture.debugElement;
    p = fixture.nativeElement.querySelector('p');
    //fixture.detectChanges(); // explicitly have to call detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check banner title getting rendered inside p elemet',()=>{
    //fixture.detectChanges();
    expect(p.textContent).toContain(component.title);
  });

  it('Should display component title changes on p element',()=>{
    const paraElement = fixture.nativeElement.querySelector('#p1');
    component.title = "Elections";
    fixture.detectChanges();
    expect(paraElement.textContent).toContain(component.title);//("TechM");    
  });

  it('Should display name change in input to h1 element', (done)=>{
    
    //const inputElement:HTMLInputElement = fixture.nativeElement.querySelector('input');

    const inputElement:HTMLInputElement = fixture.nativeElement.querySelector('#name');

     fixture.whenStable().then(() => {
      const headerElement : HTMLElement = fixture.nativeElement.querySelector('h1');
      inputElement.value = "USA"; // simulate user making changes to title
      inputElement.dispatchEvent(new Event('input'));
      expect(headerElement.textContent).toBe('USA');//(inputElement.value);
     done(); // jasmin testing environment gets to know the completion of call back 
    });

  });

});
