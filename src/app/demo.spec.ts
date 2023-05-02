import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from "./app.component";

describe('LightswitchComp', () => {
    it('#clicked() should toggle #isOn', () => {
      const comp = new AppComponent();
      expect(comp.isOn)
        .withContext('off at first')
        .toBe(false);
      comp.clicked();
      expect(comp.isOn)
        .withContext('on after click')
        .toBe(true);
      comp.clicked();
      expect(comp.isOn)
        .withContext('off after second click')
        .toBe(false);
    });
  
    // it('#clicked() should set #message to "is on"', () => {
    //   const comp = new LightswitchComponent();
    //   expect(comp.message)
    //     .withContext('off at first')
    //     .toMatch(/is off/i);
    //   comp.clicked();
    //   expect(comp.message)
    //     .withContext('on after clicked')
    //     .toMatch(/is on/i);
    // });
  });