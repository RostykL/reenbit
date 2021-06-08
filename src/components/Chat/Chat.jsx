import {ChatWrapper, ChatWith, ChatWindow, ChatInputWrapper, ChatInput} from "./chatStyled";
import {Message} from "../Message/Message";
import {useDispatch, useSelector} from "react-redux";

import {useState} from 'react'
import {getChuckResponse} from "../../redux/actions/getChuckResponse";

import {uid} from 'uid'

export default function Chat({text}) {
  const [message, setMessage] = useState("")

  const dispatch = useDispatch();
  const chatMessages = useSelector(state => state.chats).selectedChat


  function addNewMessage(e) {
	if (e.keyCode === 13 && message.length > 0) {
	  dispatch({type: "SEND_MESSAGE", payload: {id: chatMessages.id, message: message, me: true}})
	  setTimeout(() => {
		dispatch(getChuckResponse(chatMessages.id))
		dispatch({type: "REFRESH_USERS", payload: {id: chatMessages.id, newMsg: true}})
		setTimeout(() => {
		  dispatch({type: "REFRESH_USERS", payload: {id: chatMessages.id, newMsg: false}})
		}, 3000)
	  }, 2000)
	  setMessage("")
	}
  }

  if (text) return <ChatWrapper>{text && text}</ChatWrapper>

  return (
	  <ChatWrapper>
		<ChatWith>
		  {chatMessages.fullName}
		</ChatWith>
		<ChatWindow>
		  {chatMessages.messages && chatMessages && chatMessages.messages.map(el => {
			return <Message me={el.me} text={el.text} date={el.date} key={uid()}/>
		  })}
		</ChatWindow>
		<ChatInputWrapper>
		  <ChatInput placeholder={"Press enter to send a message"}
					 onKeyUp={e => addNewMessage(e)}
					 onChange={e => setMessage(e.target.value)}
					 value={message}
		  />
		</ChatInputWrapper>
	  </ChatWrapper>
  );
}