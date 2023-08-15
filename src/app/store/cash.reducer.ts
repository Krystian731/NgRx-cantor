import { createReducer, on } from '@ngrx/store';
import { addPLN, addDOLAR, addEURO } from './cash.actions';

export const initialStatePLN: number = 0;
export const initialStateDOL: number = 0;
export const initialStateEUR: number = 0;

export const reducerPLN = createReducer(
  initialStatePLN, on(addPLN, (state) => state + 1)
);
export const reducerEUR = createReducer(
  initialStateEUR, on(addEURO, (state) => state + 1)
);
export const reducerDOL = createReducer(
  initialStateDOL, on(addDOLAR, (state) => state + 1)
);
