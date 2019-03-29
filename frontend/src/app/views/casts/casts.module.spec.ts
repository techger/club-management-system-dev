import { CastsModule } from './casts.module';

describe('CastsModule', () => {
  let castsModule: CastsModule;

  beforeEach(() => {
    castsModule = new CastsModule();
  });

  it('should create an instance', () => {
    expect(castsModule).toBeTruthy();
  });
});
