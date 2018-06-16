import { ContactroutingModule } from './contactrouting.module';

describe('ContactroutingModule', () => {
  let contactroutingModule: ContactroutingModule;

  beforeEach(() => {
    contactroutingModule = new ContactroutingModule();
  });

  it('should create an instance', () => {
    expect(contactroutingModule).toBeTruthy();
  });
});
