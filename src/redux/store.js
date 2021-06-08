import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer';
import {composeWithDevTools} from "redux-devtools-extension";
import {persistStore} from "redux-persist";

const store = createStore(
	rootReducer,
	{},
	composeWithDevTools(applyMiddleware(thunk)));

const persistor = persistStore(store)

export {store, persistor};
