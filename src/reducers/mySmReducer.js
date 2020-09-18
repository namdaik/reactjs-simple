const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    default:
      return state;
  }
}

const mySmReducer = (state = [], action) => {
  console.log(state, action,66);
    switch (action.type) {
        case 'GET_URL_MY_SM':
            return [action.payload, state];
        default: return state;
    }
};