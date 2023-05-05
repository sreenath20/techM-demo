import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {

  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let p:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ BannerComponent ],
      providers:[{provide:ComponentFixtureAutoDetect,useValue:true}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
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
    component.title = "TechM";
    fixture.detectChanges();
    expect(p.textContent).toContain("TechM");    
  });

  it('Should display name change in input to h1 element',()=>{
    const inputElement:HTMLInputElement = fixture.nativeElement.querySelector('input');
    const headerElement : HTMLElement = fixture.nativeElement.querySelector('h1');
    // inputElement.value = "USA"; // simulate user making changes to title
    // inputElement.dispatchEvent(new Event('input'));
    headerElement.textContent = "USA";
    fixture.detectChanges();
    expect(headerElement.textContent).toBe('USA');

  });
});
