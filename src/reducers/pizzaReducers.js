export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "GET_PIZZAS_REQUEST":
      return {
        loading: true,
        ...state, //used to retain any existing properties in the state.
      };
    case "GET_PIZZAS_SUCCESS":
      return {
        loading: false,
        pizzas: action.payload, //contains an array of pizza data.
      };
    case "GET_PIZZAS_FAILED":
      return {
        error: action.payload, //holds information about the failure.
        loading: false,
      };
    default:
      return state;
  }
};
