import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>(
      (observer) => {
        console.log({ email });
        //Aqui iria el email real del usuario, leido desde el endpoint de nuestro backend
        if (email === 'prueba@gmail.com') {
          observer.next({ emailTaken: true });
          observer.complete();
        }

        observer.next(null);
        observer.complete();
      }
    );

    return httpCallObservable;
  }
  // validate(control: AbstractControl): Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   console.log({ email });
  //   return of({
  //     emailToken: true,
  //   });
  // }
}
