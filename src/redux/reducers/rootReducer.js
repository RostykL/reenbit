import {combineReducers} from 'redux'
import chatsReducer from "./chatsReducer";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import findChatsReducer from "./findChatsReducer";
import notifyReducer from "./notifyReducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['chats', 'findChats']
}

const rootReducer = combineReducers({
	chats: chatsReducer,
  	findChats: findChatsReducer,
    notify: notifyReducer,
})

export default persistReducer(persistConfig, rootReducer)