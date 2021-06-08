import styled from 'styled-components';

export const MessageWrapper = styled.div`
    width: 100%;
    padding: 5px 20px;
	display: flex;
	flex-direction: column;
    align-items: ${({me}) => me ? 'flex-end' : 'flex-start'};
	margin-bottom: 10px;
`

export const Text = styled.div`
	margin: 10px;
	box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
	padding: 15px 20px;
	border-radius: 5px;
    background-color: white;

`

export const MessageDate = styled.div`
	color: rgba(0,0,0,0.5);
	font-size: 13px;
`