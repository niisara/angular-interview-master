import { TestBed } from '@angular/core/testing';

import { AppRouteGuardService } from './app-route-guard.service';

describe('AppRouteGuardService', () => {
  let service: AppRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
