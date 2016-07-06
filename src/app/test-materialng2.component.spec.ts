import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TestMaterialng2AppComponent } from '../app/test-materialng2.component';

beforeEachProviders(() => [TestMaterialng2AppComponent]);

describe('App: TestMaterialng2', () => {
  it('should create the app',
      inject([TestMaterialng2AppComponent], (app: TestMaterialng2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'test-materialng2 works!\'',
      inject([TestMaterialng2AppComponent], (app: TestMaterialng2AppComponent) => {
    expect(app.title).toEqual('test-materialng2 works!');
  }));
});
