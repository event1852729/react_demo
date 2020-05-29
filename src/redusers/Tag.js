import {
  SEARCHER_TAG_LIST,
} from '../actions/Tags';

export default (
  state = {
    Tags: [],
  },
  action,
) => {
  switch (action.type) {
    case SEARCHER_TAG_LIST:
      return {
        ...state,
        Tags: [
          ...state.Tags,
          ...action.Tags,
        ],
      };
    case 'CLAER_TAG_LIST':
      return {
        ...state,
        Tags: [],
      };
    default:
      return state;
  }
};
