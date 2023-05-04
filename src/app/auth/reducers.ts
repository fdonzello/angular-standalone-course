import { createFeature, createReducer } from "@ngrx/store";

export interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false
}

const feature = createFeature({
  name: "auth",
  reducer: createReducer(
    initialState
  )
})


export const {
  reducer,
  selectIsLoggedIn
} = feature;
