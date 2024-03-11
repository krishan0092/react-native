const initialstate = 0;
export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'increment': {
      return state + 10;
    }

    case 'decrement': {
      return state > 0 ? state - 4 : state;
    }

    default: {
      return state;
    }
  }
};
