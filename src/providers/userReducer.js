const reducer = (state = null, action) => {
  switch (action.type) {
  case ('SET_USER'):
    return action.data;
  }
  return state;
};

export default reducer;