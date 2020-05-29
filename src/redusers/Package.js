import {
  FETCH_PACKAGE_LIST,
  FETCH_PACKAGE_LIST_SUCCESS,
} from '../actions/Package';

export default (
  state = {
    postResult: [],
    loading: false,
    scrolling: false,
    keyword: '',
    searching: false,
    postSize: 5,
  },
  action,
) => {
  switch (action.type) {
    case FETCH_PACKAGE_LIST:
      return {
        ...state,
        postResult: action.list,
        loading: action.loading,
      };
    case 'FETCH_MORE_PACKAGE_LIST':
      return {
        ...state,
        postSize: action.postSize,
        loading: action.loading,
        scrolling: action.scrolling,
        searching: false,
      };
    case 'SEARCHER_MORE_PACKAGE_LIST':
      return {
        ...state,
        loading: action.loading,
        keyword: action.keyword,
        scrolling: action.scrolling,
        searching: action.searching,
      };
    case 'FETCH_MORE_PACKAGE_LIST_LOADING':
      return {
        ...state,
        loading: action.loading,
        scrolling: action.scrolling,
      };
    case 'CLEAR_LIST_LOADING':
      return {
        ...state,
        postResult: [],
        keyword: '',
        scrolling: false,
        loading: false,
        searching: false,
        postSize: 5,
      };

    case FETCH_PACKAGE_LIST_SUCCESS:
      return {
        ...state,
        postResult: [
          ...state.searchResult,
          ...action.list,
        ],
      };
    default:
      return state;
  }
};
