import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {provideHttpClient} from '@angular/common/http';
import {cartReducer} from './features/cart/store/cart.reducer';
import {appReducer} from './app.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideStore(appReducer),
    /*provideStore({cart: cartReducer})*/
  ]
};
