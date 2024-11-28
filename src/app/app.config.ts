import {
  ApplicationConfig,
  InjectionToken,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NumberService } from './number.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggerInterceptor } from './logger.interceptor';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { secondInterceptor } from './second.interceptor';
import { provideStore } from '@ngrx/store';
import { bookReducer } from './features/book/book.feature';

export const NUMBER_SERVICE = new InjectionToken<NumberService>(
  'Number Service'
);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: NUMBER_SERVICE,
      useFactory: () => new NumberService('Hello, world! from factory'),
    },
    provideHttpClient(withInterceptors([loggerInterceptor, secondInterceptor])),
    provideToastr(),
    provideAnimations(),
    provideStore({
      bookFeature: bookReducer,
    }),
  ],
};
