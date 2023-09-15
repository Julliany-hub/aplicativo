import { TestBed } from '@angular/core/testing';
import { JogadoresserviceService } from './jogadoresservice.service';


describe('JogadoresserviceService', () => {
  let service: JogadoresserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogadoresserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
