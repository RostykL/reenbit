const initialState = {
  newMessageFrom: null,
  loaded: false
}

export default function notifyReducer(state = initialState, action) {
  switch (action.type) {
	case "NOTIFY_USER":
	  return {
		newMessageFrom: action.payload,
		loaded: true
	  };

	default:
	  return state;
  }
}