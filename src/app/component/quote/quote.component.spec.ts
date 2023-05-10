import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { QuoteService } from 'src/app/service/quote.service';
import { asyncData } from 'src/app/testing/async-observable-helpers';
import { asyncError } from 'src/app/testing/asyncError-Observable-helpers';

import { QuoteComponent } from './quote.component';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;
  let serverQuote: string;
  let getQuoteSpy: any;
  let quotePara: HTMLElement;
  let errorParaElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuoteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {

    serverQuote = 'Test data';
    const fakeQuoteService = jasmine.createSpyObj('QuoteService', ['getQuote']);
    // return synchronous data observable
    getQuoteSpy = fakeQuoteService.getQuote.and.returnValue(of(serverQuote));

    TestBed.configureTestingModule({
      declarations: [QuoteComponent],
      providers: [{ provide: QuoteService, useValue: fakeQuoteService }]
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

  it('component displaying quote', fakeAsync(() => {
    getQuoteSpy.and.returnValue(of(serverQuote));

    fixture.detectChanges();// onInit()
    tick();
    fixture.detectChanges();// update view
    
    expect(quotePara.textContent?.trim()).toBe(serverQuote.trim());
  }));

  // e.g for fakeAsync call
  it('should display error when quoteService fails in fakeAsync', fakeAsync(() => {

    getQuoteSpy.and.returnValue(throwError(() => new Error('Server failure!')));

    fixture.detectChanges(); // onInit()

    tick(); // triggers component set time out virtually 

    fixture.detectChanges();
    expect(errorParaElement.textContent?.trim()).toBe('Server failure!');
  }));

  it('looks async but is synchronous', fakeAsync((): void => {
    let flag = false;
    setTimeout(() => {
      flag = true;
    }, 100);
    expect(flag).toBe(false);
    tick(50);
    expect(flag).toBe(false);
    tick(50);
    expect(flag).toBe(true);
  }));

  it('should give date difference in kakeSync in milli sec', fakeAsync(() => {
    const start = Date.now();
    tick(100);
    const end = Date.now();
    expect(end - start).toBe(100);
  }))

  it('Should wait for asysnc observble to return data', waitForAsync(() => {

    getQuoteSpy.and.returnValue(asyncData(serverQuote));

    fixture.detectChanges(); // ngOnInit();

    fixture.whenStable().then(() => {
      fixture.detectChanges(); // update the view
      expect(quotePara.textContent?.trim()).toBe(serverQuote);
    })

  }));
  it('should display error message when server returns failure', waitForAsync(() => {

    getQuoteSpy.and.returnValue(asyncError('Server Failure'));
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(errorParaElement.textContent?.trim()).toBe('Server Failure');

    });
  }))


});
