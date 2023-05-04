import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginAction } from './actions';
import { tap } from 'rxjs/operators';

export const login = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(loginAction),
      tap((action) => {
        console.log(action.email)
      })
    )
  }, { functional: true, dispatch: false }
)

