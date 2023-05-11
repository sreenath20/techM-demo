import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Hero } from '../model/Hero';
import { asyncData } from '../testing/async-observable-helpers';
import { asyncError } from '../testing/asyncError-Observable-helpers';

import { HeroService } from './hero.service';

//fdescribe('HeroService', () => {
describe('HeroService', () => {
  let service: HeroService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new HeroService(httpClientSpy);
  });

  //fit('should be created', () => {
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return expected data', (done) => {

    const expectedData: Hero[] = [{ id: 1, name: 'TechM' }, { id: 2, name: 'India' }];

    httpClientSpy.get.and.returnValue(asyncData(expectedData));

    service.getHeros().subscribe(
      {
        next: (response) => {

          expect(response)
            .withContext('Expected hero data')
            .toEqual(expectedData);
          done();
        },
        error: (error) => { done.fail }
      }
    );

    expect(httpClientSpy.get.calls.count())
      .withContext('get called once')
      .toBe(1);
  });

  it('Should return error when server 404 ', (done) => {

    const erroResponse = new HttpErrorResponse({
      error: 'Heros not found 404 error',
      status: 404, statusText: 'Not Found'
    })
    httpClientSpy.get.and.returnValue(asyncError(erroResponse));

    service.getHeros().subscribe({
      next: () => { done.fail('Expected error') },
      error: (error) => {
        console.log('Inside http error subscribe:');
        console.log(JSON.stringify(error));
        expect(error.error).toContain('Heros not found 404 error');
        done();
      }
    })
  });

});
