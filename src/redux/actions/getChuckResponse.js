export const getChuckResponse = (id) => {
  return async (dispatch) => {
	return fetch("https://api.chucknorris.io/jokes/random", {
	  method: 'GET'
	}).then(res => res.json()).then(res => {
	  dispatch({type: "SEND_MESSAGE", payload: {id: id, message: res.value, me: false}})
	})
  }
}