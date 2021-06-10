import {ListOfChats} from "./chatsStyled";
import ChatBlock from "../ChatBlock/ChatBlock";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function Chats() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.chats);
  const searchedContacts = useSelector(state => state.findChats).found
  const notify = useSelector(state => state.notify)
  useEffect(() => {
	if (notify.loaded) alert("Хтось залишив вам повідомлення " + notify.newMessageFrom)
  }, [notify])

  useEffect(() => {
	dispatch({type: "FIND_CHAT", payload: contacts.chats})
  }, [])

  function changeChat(id) {
	dispatch({type: "SELECT_CHAT", payload: {id}})
	dispatch({type: "CHANGE_NEW_MESSAGE", payload: {id: id, newMsg: false}})
  }


  return (
	  <ListOfChats>
		{contacts.chats && searchedContacts.map(el => {
			  if (el) {
				const lastMessage = el && el.messages && el.messages[el.messages.length - 1];
				if (lastMessage) {
				  return <NavLink
					  to={`/${el.fullName}`}
					  key={el.id}
					  onClick={() => changeChat(el.id)}
				  >
					<ChatBlock
						fullname={el.fullName}
						date={lastMessage.date}
						lastMessage={lastMessage.text}
					/>
				  </NavLink>;
				}
			  }
			}
		)}

	  </ListOfChats>
  );
}