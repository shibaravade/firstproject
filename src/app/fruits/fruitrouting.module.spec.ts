import { FruitroutingModule } from './fruitrouting.module';

describe('FruitroutingModule', () => {
  let fruitroutingModule: FruitroutingModule;

  beforeEach(() => {
    fruitroutingModule = new FruitroutingModule();
  });

  it('should create an instance', () => {
    expect(fruitroutingModule).toBeTruthy();
  });
});
