import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {provideHttpClient} from '@angular/common/http';
import {appReducer} from './app.reducer';
import {provideEffects} from '@ngrx/effects';
import {ProductEffects} from './features/products/product-store/product.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideStore(appReducer),
    provideEffects(ProductEffects),
    /*provideStore({cart: cartReducer})*/
  ]
};
