const initialState = {
  hello: "Hello"
};

const UPDATE_HELLO = "UPDATE_HELLO";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_HELLO:
      console.log(action.payload);
      return Object.assign({}, state, { hello: action.payload });
    default:
      return state;
  }
}

export function updateHello(hello) {
  return {
    type: UPDATE_HELLO,
    payload: hello
  };
}

export default reducer;
