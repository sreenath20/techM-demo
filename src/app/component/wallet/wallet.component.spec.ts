import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletComponent } from './wallet.component';

describe('WalletComponent', () => {

  let component: WalletComponent;

  let fixture: ComponentFixture<WalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WalletComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check initial balance', () => {
    expect(component.balance).toBe(0);
  });

  it('check if amount gets added to balance', () => {
    component.balance = 100;
    component.addBalance(50);
    expect(component.balance).toBe(150);
  });

  it('check if amount gets deducted from balance', () => {
    component.balance = 100;
    component.withDraw(50);
    expect(component.balance).toBe(50);
  });

  it('check insufficent balance', () => {
    component.balance = 100;
    expect(component.withDraw(150)).toBeFalse();
  });

  it('check balance', () => {
    component.balance = 100;
    expect(component.checkBalance()).toBe(100);
  });

});
