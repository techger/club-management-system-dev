import { SpModule } from './sp.module';

describe('SpModule', () => {
  let spModule: SpModule;

  beforeEach(() => {
    spModule = new SpModule();
  });

  it('should create an instance', () => {
    expect(spModule).toBeTruthy();
  });
});
