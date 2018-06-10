import { ColorroutingModule } from './colorrouting.module';

describe('ColorroutingModule', () => {
  let colorroutingModule: ColorroutingModule;

  beforeEach(() => {
    colorroutingModule = new ColorroutingModule();
  });

  it('should create an instance', () => {
    expect(colorroutingModule).toBeTruthy();
  });
});
