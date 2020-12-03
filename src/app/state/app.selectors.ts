import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromApp from './app.reducer';
import * as fromRouter from '@ngrx/router-store';

  
export const getRouterState = createFeatureSelector<any>('router');

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(getRouterState);

export const getActiveRoute = createSelector(selectUrl, selectQueryParams, (url, queryParams) => {
  return { url, queryParams };
});


export const getAppState = createFeatureSelector<fromApp.State>('app');

export const getUiEmail = createSelector(getAppState, (state: fromApp.State) => state.uiEmail);

export const getUiPassword = createSelector(getAppState, (state: fromApp.State) => state.uiPassword);

export const getUiName = createSelector(getAppState, (state: fromApp.State) => state.uiName);

export const getUiEmail1 = createSelector(getAppState, (state: fromApp.State) => state.uiEmail1);

export const getUiPassword1 = createSelector(getAppState, (state: fromApp.State) => state.uiPassword1);

export const getUiSelect = createSelector(getAppState, (state: fromApp.State) => state.uiSelect);

export const getUiSelect1 = createSelector(getAppState, (state: fromApp.State) => state.uiSelect1);

export const getUiInput = createSelector(getAppState, (state: fromApp.State) => state.uiInput);

export const getUiInput1 = createSelector(getAppState, (state: fromApp.State) => state.uiInput1);

export const getUiInput2 = createSelector(getAppState, (state: fromApp.State) => state.uiInput2);

export const getUiSelect2 = createSelector(getAppState, (state: fromApp.State) => state.uiSelect2);

export const getUiSelect21 = createSelector(getAppState, (state: fromApp.State) => state.uiSelect21);

export const getUiSelect22 = createSelector(getAppState, (state: fromApp.State) => state.uiSelect22);

export const getUiTextArea = createSelector(getAppState, (state: fromApp.State) => state.uiTextArea);

