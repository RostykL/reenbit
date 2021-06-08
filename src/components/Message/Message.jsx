import {MessageWrapper, Text, MessageDate} from "./messageStyled";

export function Message({me, text, date}) {
  date = new Date(date)
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  let year = date.getUTCFullYear();
  let time = date.toLocaleTimeString();

  return (
	  <MessageWrapper me={me}>
		<Text>
		  {me && "(You) "}{text}
		  <MessageDate>{year + "/" + month + "/" + day} {time}</MessageDate>
		</Text>
	  </MessageWrapper>
  );
}