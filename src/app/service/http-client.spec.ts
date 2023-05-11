import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../model/Hero';

fdescribe('HttpClient testing', () => {

    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
    });
    afterEach(() => {
        httpTestingController.verify();
    });
    it('test http get method to reposnd with data', () => {

        const testUrl = '/heros';
        const testData: Hero = { id: 1, name: 'TechM' };

        httpClient.get<Hero>(testUrl)
            .subscribe({
                next: (data) => {
                    expect(data).toEqual(testData);
                },
                error: () => { fail('Should have passed & returned Hero JSON') }
            }
            );
        const getReq = httpTestingController.expectOne(testUrl);
        expect(getReq.request.method).toEqual('GET');
        getReq.flush(testData);
    });

    it('test if httpClient reposnds with error', () => {
        const testUrl = '/heros';
        const emsg = '404 error';
        httpClient.get<Hero>(testUrl).
            subscribe(
                {
                    next: () => { fail('Should have failed with 404') },
                    error: (error) => {
                        expect(error.status).toEqual(404);
                        expect(error.error).toEqual(emsg);
                    }
                }
            );

        const getReqObj = httpTestingController.expectOne(testUrl);
        getReqObj.flush(emsg, { status: 404, statusText: 'Not Found' });
    });
});