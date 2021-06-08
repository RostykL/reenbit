import styled from "styled-components";

export const ChatWrapper = styled.div`
	flex: 1;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
`

export const ChatWith = styled.div`
	display: flex;
	padding: 15px 20px;
	box-shadow: 3px 0px 6px rgba(0,0,0,0.5);
	color: white;
	font-weight: bolder;
	letter-spacing: 1px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
`

export const ChatWindow = styled.div`
	height: calc(100% - 51px - 70px);
	overflow-y: scroll;
	width: 100%;
	background-color: rgba(0,0,0,0.5);
`

export const ChatInputWrapper = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 20px;
`

export const ChatInput = styled.input`
	&:focus {
		 outline: none;
	 }
	border: none;
	width: 100%;
	height: 35px;
	background-color: rgb(250,250,250);
	border-radius: 5px;
	text-indent: 10px;
`