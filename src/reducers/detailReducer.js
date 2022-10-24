const initState = { game: {}, screen: {}, isLoading: true };

export const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        devs: action.payload.devs,
        buy: action.payload.buy,
        reddit: action.payload.reddit,
        series: action.payload.series,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
