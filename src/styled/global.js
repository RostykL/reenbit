import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, serif;
    }
	
	a {
		text-decoration: none;
	}

    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
`