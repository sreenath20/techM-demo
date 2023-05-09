import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { QuoteService } from 'src/app/service/quote.service';

import { QuoteComponent } from './quote.component';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;
  let serverQuote:string;
  let getQuoteSpy:any;
  let quotePara:HTMLElement;
  let errorParaElement:HTMLElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteComponent ]
    })
    .compileComponents();   
  });

  beforeEach(()=>{

    serverQuote = 'Test data';
    const fakeQuoteService = jasmine.createSpyObj('QuoteService',['getQuote']);
    // return synchronous data observable
    getQuoteSpy = fakeQuoteService.getQuote.and.returnValue(of(serverQuote));  
    
    TestBed.configureTestingModule({
      declarations:[QuoteComponent],
      providers:[{provide:QuoteService, useValue:fakeQuoteService}]
    });

    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    quotePara = fixture.nativeElement.querySelector('.p1');
    errorParaElement = fixture.nativeElement.querySelector('.errorPara');
    
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component displaying quote',()=>{
    fixture.detectChanges();// onInit()
    expect(quotePara.textContent?.trim()).toBe(serverQuote.trim());
  });

  // e.g for fakeAsync call
  it('should display error when quoteService fails',fakeAsync(()=>{

    getQuoteSpy.and.returnValue(throwError(()=>
      new Error('QuoteService Failure')));

      fixture.detectChanges(); // onInit()
      
      tick(); // triggers component set time out virtually 

      fixture.detectChanges();
      expect(errorParaElement.textContent).toMatch(/Failure/);


      
    
  }));
});
