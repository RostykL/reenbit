import {ChatBlockWrapper, Top, Bottom, Name, ChatBlockDate} from "./chatBlockStyled";

export default function ChatBlock({fullname, date, lastMessage, newMsg}) {
  date = new Date(date)
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  let year = date.getUTCFullYear();
  let time = date.toLocaleTimeString();
  return (
  	<ChatBlockWrapper newMsg={newMsg}>
		<Top>
		  <Name>{fullname}</Name>
		  <ChatBlockDate>{year + "/" + month + "/" + day} {time}</ChatBlockDate>
		</Top>
	  <Bottom>{lastMessage}</Bottom>
	</ChatBlockWrapper>
  );
}