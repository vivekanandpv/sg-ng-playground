import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const secondInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('second interceptor: request interception', req.url);

  return next(req).pipe(
    tap((e) => {
      if (e.type === HttpEventType.Response) {
        console.log('second interceptor: response interception', e.status);
      }
    })
  );
};
