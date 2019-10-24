import { ActionCreator } from '../types';

import { ActionTypes } from './../../constants';

export const resetVisualEditor: ActionCreator = ({ dispatch }, isReset) => {
  dispatch({
    type: ActionTypes.EDITOR_RESET_VISUAL,
    payload: { isReset },
  });
};

export const syncVisualEditorState: ActionCreator = ({ dispatch }, editorState) => {
  dispatch({
    type: ActionTypes.EDITOR_SYNCSTATE_VISUAL,
    payload: {
      editorState,
    },
  });
};
