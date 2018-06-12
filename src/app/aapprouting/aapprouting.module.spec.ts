import { AapproutingModule } from './aapprouting.module';

describe('AapproutingModule', () => {
  let aapproutingModule: AapproutingModule;

  beforeEach(() => {
    aapproutingModule = new AapproutingModule();
  });

  it('should create an instance', () => {
    expect(aapproutingModule).toBeTruthy();
  });
});
