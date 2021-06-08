import SearchBar from "../SearchInput/Searchbar";
import Chats from "../Chats/Chats";
import {SidebarWrapper} from "./sidebarStyled";

export default function SideBar() {
  return (
	  <SidebarWrapper>
		<SearchBar/>
		<Chats/>
	  </SidebarWrapper>
  );
}