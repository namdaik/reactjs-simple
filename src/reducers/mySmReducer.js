let posts = [];

export default function postReducer(state = posts, action) {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    default:
      return state;
  }
}

const mySmReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_URL_MY_SM':
            return [...state, action.path];
        default: return [...state];
    }
};

export default products;