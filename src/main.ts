import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TestMaterialng2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TestMaterialng2AppComponent);

