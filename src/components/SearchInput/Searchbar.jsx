import {Input, SearchbarWrapper} from "./searchbarStyled";

import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

export default function SearchBar() {
  const [name, setName] = useState("")
  const chats = useSelector(state => state.chats).chats;
  const [tmpChats, setTmpChats] = useState(() => [...chats])

  const dispatch = useDispatch()

  useEffect(() => {
	if (name.length === 0) {
	  dispatch({type: "FIND_CHAT", payload: tmpChats})
	} else {
	  let users = [];
	  for (let i = 0; i < tmpChats.length; i++) {
		if (new RegExp(name.toLowerCase()).test(tmpChats[i].fullName.toLowerCase())) {
		  users.push(chats[i]);
		}
	  }
	  dispatch({type: "FIND_CHAT", payload: users})
	}

  }, [name])

  return (
	  <SearchbarWrapper>
		<Input
			placeholder={"press enter to search"}
			onChange={(e) => setName(e.target.value)}
		/>
	  </SearchbarWrapper>
  );
}