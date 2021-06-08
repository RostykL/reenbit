import styled from "styled-components";

export const SearchbarWrapper = styled.div`
	width: 100%;
	padding: 15px 20px;
	background-color: lightblue;
`

export const Input = styled.input`
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