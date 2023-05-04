import { createAction, props } from "@ngrx/store";

export const loginAction = createAction('[Login Page] Submit', props<{ email: string, password: string }>())
