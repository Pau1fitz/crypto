export const getHeadlinesPending = () => {
  return {
    'type': 'GET_HEADLINES_PENDING'
  };
}

export const getHeadlinesSuccess = (headlines) => {
  return {
    'type': 'GET_HEADLINES_SUCCESS',
    headlines
  };
}

export const getHeadlinesError= () => {
  return {
    'type': 'GET_HEADLINES_ERROR'
  };
}

export const getHeadlines = () => {
	return dispatch => {
		dispatch(getHeadlinesPending());
    fetch('').then(res => {
      return res.json();
    }).then(res => {
      dispatch(getHeadlinesSuccess(res.items));
    }).catch(err => {
      dispatch(getHeadlinesError(err));
    });
	};
};
