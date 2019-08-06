import {
  ITEMS_HAS_ERRORED,
  ITEMS_IS_LOADING,
  ITEMS_FETCH_DATA_SUCCESS
} from './types';

const itemsHasErrored = bool => ({
  type: ITEMS_HAS_ERRORED,
  hasErrored: bool
});

const itemsIsLoading = bool => ({
  type: ITEMS_IS_LOADING,
  isLoading: bool
});

const itemsFetchDataSuccess = items => ({
  type: ITEMS_FETCH_DATA_SUCCESS,
  items
});

export const itemsFetchData = () => {
  return dispatch => {
    dispatch(itemsIsLoading(true));

    fetch(
      'http://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
    )
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
};
