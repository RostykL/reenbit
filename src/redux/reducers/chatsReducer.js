const initialState = {
  chats: [
	{
	  id: 0,
	  fullName: "Rostyk Lukavyi",
	  messages: [
		{
		  id: 0,
		  text: "Oh, hi mark!",
		  date: new Date(),
		  me: true
		}
	  ]
	},
	{
	  id: 1,
	  fullName: "Oleg Molych",
	  messages: [
		{
		  id: 0,
		  text: "What are you doing tomorrow?!",
		  date: new Date(),
		  me: false
		},
		{
		  id: 1,
		  text: "nothing?!",
		  date: new Date(),
		  me: true
		}
	  ]
	},
	{
	  id: 2,
	  fullName: "Anton Chekhov",
	  messages: [
		{
		  id: 0,
		  text: "Hello:)",
		  date: new Date(),
		  me: false
		}
	  ]
	}
  ],
  selectedChat: {},
  searched: [],
  loading: true,
  error: null
}

export default function chatsReducer(state = initialState, action) {
  switch (action.type) {
	case "FETCH_CHATS":
	  return state;
	case "SELECT_CHAT":
	  return {
		...state,
		selectedChat: state.chats.filter(el => el.id === action.payload.id)[0]
	  };
	case "SEND_MESSAGE":
	  return {
		...state, chats: state.chats.map((el,i) => {
		  if (el.id === action.payload.id) {
			el.messages.push({
			  id: new Date(),
			  text: action.payload.message,
			  date: new Date(),
			  me: action.payload.me
			})
		  }
		  return el;
		})
	  };
	case "REFRESH_USERS":
	  return {
		...state,
		chats: [
		  {...state.chats.filter(el => el.id === action.payload.id)[0], newMsg: action.payload.newMsg},
		  ...state.chats.filter(el => el.id !== action.payload.id)
		],
	  }
	case "SEARCHED_USERS":
	  return {
	    ...state,
		searched: action.payload.users
	  }

	case "CHANGE_NEW_MESSAGE":
	  return {
		...state,
		chats: state.chats.map(el => {
		  if(el.id === action.payload.id) {
		    el.newMsg = action.payload.newMsg;
		  }
		  return el;
		})
	  }
	default:
	  return state;
  }
}