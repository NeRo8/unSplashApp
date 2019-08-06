import {
  ITEMS_HAS_ERRORED,
  ITEMS_FETCH_DATA_SUCCESS,
  ITEMS_IS_LOADING
} from '../actions/types';

const initalState = {
  hasErrored: false,
  isLoading: true,
  items: []
};

export default function reducer(state = initalState, actions) {
  switch (actions.type) {
    case ITEMS_HAS_ERRORED: {
      return {
        ...state,
        hasErrored: actions.hasErrored
      };
    }
    case ITEMS_IS_LOADING: {
      return {
        ...state,
        isLoading: actions.isLoading
      };
    }
    case ITEMS_FETCH_DATA_SUCCESS: {
      return {
        ...state,
        items: actions.items
      };
    }
    default:
      return state;
  }
}
