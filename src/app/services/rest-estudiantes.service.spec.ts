import { TestBed } from '@angular/core/testing';

import { RestEstudiantesService } from './rest-estudiantes.service';

describe('RestEstudiantesService', () => {
  let service: RestEstudiantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestEstudiantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
