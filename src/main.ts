import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { TestMaterialng2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TestMaterialng2AppComponent, [HTTP_PROVIDERS]);

