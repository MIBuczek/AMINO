import { TestBed } from '@angular/core/testing';

import { LangSwitcherService } from './lang-switcher.service';

describe('LangSwitcherService', () => {
  let service: LangSwitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangSwitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
