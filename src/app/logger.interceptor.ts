import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { catchError, finalize, of, tap, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);

  console.log('first interceptor: request interception', req.url);

  //  Adding the HTTP headers
  const reqWithHeaders = req.clone({
    headers: req.headers.set('X-Customer-Header', 'custom value'),
  });

  return next(reqWithHeaders).pipe(
    tap((e) => {
      if (e.type === HttpEventType.Response) {
        console.log('first interceptor: response interception', e.status);

        if (e.status < 400) {
          toastr.success('Server response success', 'Title of the Toastr');
        }
      }
    }),
    catchError((e) => {
      console.log('response error', e);
      toastr.error('Server response error', 'Title of the Toastr');
      // return of();
      return throwError(() => e);
    }),
    finalize(() => {
      console.log('exiting the response interception');
    })
  );
};
