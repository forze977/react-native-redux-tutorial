import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';

import reducer from './reducer';

configureStore = (initialState = {}) => {
  const store = createStore(persistReducer({
    key: 'data',
    storage: AsyncStorage,
  }, reducer), initialState)
  const persister = persistStore(store, null); 
  return { store, persister }
}

export default configureStore;