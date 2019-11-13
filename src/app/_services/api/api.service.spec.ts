import {HttpClient, HttpHandler} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {ApiService} from './api.service';

describe('ApiService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpClient,
        HttpHandler
      ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('should rewrite dummy API URL to access static JSON assets directory', () => {
    const service: ApiService = TestBed.get(ApiService);
    const result: string = (service as any)._dummy_api_url('https://staging.whatever.com:5000/api/whatever');
    expect(result).toEqual('/assets/json/whatever.json');
  });

  it('should rewrite dummy API URL to access static JSON assets directory', () => {
    const service: ApiService = TestBed.get(ApiService);

  });
});
