import { HoleStatusModule } from './hole-status.module';

describe('HoleStatusModule', () => {
  let holeStatusModule: HoleStatusModule;

  beforeEach(() => {
    holeStatusModule = new HoleStatusModule();
  });

  it('should create an instance', () => {
    expect(holeStatusModule).toBeTruthy();
  });
});
