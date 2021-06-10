import {ChatWrapper, ChatWith, ChatWindow, ChatInputWrapper, ChatInput} from "./chatStyled";
import {Message} from "../Message/Message";
import {useDispatch, useSelector} from "react-redux";

import {useEffect, useState} from 'react'
import {getChuckResponse} from "../../redux/actions/getChuckResponse";

import {useParams} from 'react-router-dom';

import {uid} from 'uid'

export default function Chat({text}) {
  const [message, setMessage] = useState("")
  const {name} = useParams()

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.chats);
  const selectedUser = contacts.chats.filter(el => el.fullName.toLowerCase() === name.toLowerCase())[0]


  function addNewMessage(e) {
	if (e.keyCode === 13 && message.length > 0) {
	  dispatch({type: "SEND_MESSAGE", payload: {id: selectedUser.id, message: message, me: true}})
	  setTimeout(async () => {
		dispatch(getChuckResponse(selectedUser.id))
		dispatch({type: "NOTIFY_USER", payload: selectedUser.fullName})
		dispatch({type: "REFRESH_SEARCHED_CHAT", payload: {id: selectedUser.id}})
	  }, 2000)
	  setMessage("")
	}
  }

  if (text) return <ChatWrapper>{text && text}</ChatWrapper>

  return (
	  <ChatWrapper>
		<ChatWith>
		  {selectedUser.fullName}
		</ChatWith>
		<ChatWindow>
		  {selectedUser.messages && selectedUser && selectedUser.messages.map(el => {
			return <Message me={el.me} text={el.text} date={el.date} key={uid()}/>
		  })}
		</ChatWindow>
		<ChatInputWrapper>
		  {selectedUser.messages && <ChatInput placeholder={"Press enter to send a message"}
											   onKeyUp={e => addNewMessage(e)}
											   onChange={e => setMessage(e.target.value)}
											   value={message}
		  />}
		</ChatInputWrapper>
	  </ChatWrapper>
  );
}