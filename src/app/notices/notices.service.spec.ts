import { TestBed } from '@angular/core/testing';

import { NoticesService } from '../notice.service';

describe('NoticesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoticesService = TestBed.get(NoticesService);
    expect(service).toBeTruthy();
  });
});
