const initialState = {
  found: [],
}

export default function findChatsReducer(state = initialState, action) {
  switch (action.type) {
	case "FIND_CHAT":
	  return {
		found: action.payload
	  };

	case "REFRESH_SEARCHED_CHAT":
	  return {
		found: [
		  {...state.found.filter(el => el.id === action.payload.id)[0]},
		  ...state.found.filter(el => el.id !== action.payload.id)
		]
	  }
	default:
	  return state;
  }
}