import { createReducer, on } from '@ngrx/store';

import * as AppActions from './app.actions';

export interface State {
  uiTextArea: {
      value: any;
  };
  uiSelect22: {
      value: any;
  };
  uiSelect21: {
      value: any;
  };
  uiSelect2: {
      value: any;
  };
  uiInput2: {
      value: any;
  };
  uiInput1: {
      value: any;
  };
  uiInput: {
      value: any;
  };
  uiSelect1: {
      value: any;
  };
  uiSelect: {
      value: any;
  };
  uiPassword1: {
      value: any;
  };
  uiEmail1: {
      value: any;
  };
  uiName: {
      value: any;
  };
  uiPassword: {
      value: any;
  };
  uiEmail: {
      value: any;
  };
}

const initialState: State = {
  uiTextArea: {
      value: '',
  },
  uiSelect22: {
      value: '',
  },
  uiSelect21: {
      value: '',
  },
  uiSelect2: {
      value: '',
  },
  uiInput2: {
      value: '',
  },
  uiInput1: {
      value: '',
  },
  uiInput: {
      value: '',
  },
  uiSelect1: {
      value: '',
  },
  uiSelect: {
      value: '',
  },
  uiPassword1: {
      value: '',
  },
  uiEmail1: {
      value: '',
  },
  uiName: {
      value: '',
  },
  uiPassword: {
      value: '',
  },
  uiEmail: {
      value: '',
  },
};

export const reducer = createReducer(
  initialState,
  on(AppActions.updateUiTextArea, (state: State, changes) => ({ ...state, uiTextArea: { ...state.uiTextArea, ...changes.param }})),
  on(AppActions.updateUiSelect22, (state: State, changes) => ({ ...state, uiSelect22: { ...state.uiSelect22, ...changes.param }})),
  on(AppActions.updateUiSelect21, (state: State, changes) => ({ ...state, uiSelect21: { ...state.uiSelect21, ...changes.param }})),
  on(AppActions.updateUiSelect2, (state: State, changes) => ({ ...state, uiSelect2: { ...state.uiSelect2, ...changes.param }})),
  on(AppActions.updateUiInput2, (state: State, changes) => ({ ...state, uiInput2: { ...state.uiInput2, ...changes.param }})),
  on(AppActions.updateUiInput1, (state: State, changes) => ({ ...state, uiInput1: { ...state.uiInput1, ...changes.param }})),
  on(AppActions.updateUiInput, (state: State, changes) => ({ ...state, uiInput: { ...state.uiInput, ...changes.param }})),
  on(AppActions.updateUiSelect1, (state: State, changes) => ({ ...state, uiSelect1: { ...state.uiSelect1, ...changes.param }})),
  on(AppActions.updateUiSelect, (state: State, changes) => ({ ...state, uiSelect: { ...state.uiSelect, ...changes.param }})),
  on(AppActions.updateUiPassword1, (state: State, changes) => ({ ...state, uiPassword1: { ...state.uiPassword1, ...changes.param }})),
  on(AppActions.updateUiEmail1, (state: State, changes) => ({ ...state, uiEmail1: { ...state.uiEmail1, ...changes.param }})),
  on(AppActions.updateUiName, (state: State, changes) => ({ ...state, uiName: { ...state.uiName, ...changes.param }})),
  on(AppActions.updateUiPassword, (state: State, changes) => ({ ...state, uiPassword: { ...state.uiPassword, ...changes.param }})),
  on(AppActions.updateUiEmail, (state: State, changes) => ({ ...state, uiEmail: { ...state.uiEmail, ...changes.param }})),
);
