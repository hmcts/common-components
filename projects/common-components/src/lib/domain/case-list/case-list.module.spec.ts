import { CaseListModule } from './case-list.module';

describe('CaseListModule', () => {
  let caseListModule: CaseListModule;

  beforeEach(() => {
    caseListModule = new CaseListModule();
  });

  it('should create an instance', () => {
    expect(caseListModule).toBeTruthy();
  });
});
