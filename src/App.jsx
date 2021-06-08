import {AppWrapper} from "./styled/appStyled";
import Chat from "./components/Chat/Chat";
import SideBar from "./components/Sidebar/Sidebar";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {useEffect} from "react";
import {useSelector} from "react-redux";

function App() {
  const state = useSelector(state =>  state.chats);

  useEffect(() => {
    localStorage.setItem('chat', JSON.stringify(state));
  }, [])

  return (
	  <Router>
		<Switch>
		  <AppWrapper>
			<SideBar/>
			<Route exact path={"/"}>
			  <Chat text={"Choose chat"}/>
			</Route>
			<Route path={"/:name"}>
			  <Chat/>
			</Route>
		  </AppWrapper>
		</Switch>
	  </Router>
  );
}

export default App;
