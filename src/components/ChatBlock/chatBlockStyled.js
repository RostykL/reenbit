import styled from "styled-components";

export const ChatBlockWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.4);
    margin: 10px 0;
    padding: 10px;
    background-color: ${({newMsg}) => newMsg ? 'lightgreen' : 'transparent'};

`

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
	color: rgba(0,0,0,0.8);
`

export const Bottom = styled.div`
    color: yellow;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
	margin-top: 5px;
	color: rgba(0,0,0,0.4);
	font-size: 13px;
`

export const Name = styled.div`
	font-size: 20px;
`

export const ChatBlockDate = styled.div`
	font-size: 13px;
`