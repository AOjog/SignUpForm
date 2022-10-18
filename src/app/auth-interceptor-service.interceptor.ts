import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
  constructor(
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      // If we have a token, we set it to the header
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${token}`}
      });
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {//unoauthorized
            // this.router.navigate(['sign-up']);
          }
        }
        return throwError(err);
      })
    )
  }
}
