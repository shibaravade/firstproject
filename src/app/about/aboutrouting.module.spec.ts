import { AboutroutingModule } from './aboutrouting.module';

describe('AboutroutingModule', () => {
  let aboutroutingModule: AboutroutingModule;

  beforeEach(() => {
    aboutroutingModule = new AboutroutingModule();
  });

  it('should create an instance', () => {
    expect(aboutroutingModule).toBeTruthy();
  });
});
