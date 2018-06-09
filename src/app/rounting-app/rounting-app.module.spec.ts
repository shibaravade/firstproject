import { RountingAppModule } from './rounting-app.module';

describe('RountingAppModule', () => {
  let rountingAppModule: RountingAppModule;

  beforeEach(() => {
    rountingAppModule = new RountingAppModule();
  });

  it('should create an instance', () => {
    expect(rountingAppModule).toBeTruthy();
  });
});
