import {ListOfChats} from "./chatsStyled";
import ChatBlock from "../ChatBlock/ChatBlock";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export default function Chats() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.chats);

  function changeChat(id) {
	dispatch({type: "SELECT_CHAT", payload: {id}})
	dispatch({type: "CHANGE_NEW_MESSAGE", payload: {id: id, newMsg: false}})
  }

  return (
	  <ListOfChats>
		{contacts.searched && contacts.searched.map(el => {
		  const lastMessage = el.messages[el.messages.length - 1] || ""
		  return <NavLink
			  to={`/${el.fullName}`}
			  key={el.id}
			  onClick={() => changeChat(el.id)}
		  >
			<ChatBlock
				fullname={el.fullName}
				date={lastMessage.date}
				lastMessage={lastMessage.text}
				newMsg={el.newMsg}
			/>
		  </NavLink>;
		})}

		{!contacts.searched && contacts.chats && contacts.chats.map(el => {
		  const lastMessage = el.messages[el.messages.length - 1] || ""
		  return <NavLink
			  to={`/${el.fullName}`}
			  key={el.id}
			  onClick={() => changeChat(el.id)}
		  >
			<ChatBlock
				fullname={el.fullName}
				date={lastMessage.date}
				lastMessage={lastMessage.text}
				newMsg={el.newMsg}
			/>
		  </NavLink>;
		})}
	  </ListOfChats>
  );
}