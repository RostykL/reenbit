import {AppWrapper} from "./styled/appStyled";
import Chat from "./components/Chat/Chat";
import SideBar from "./components/Sidebar/Sidebar";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
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
