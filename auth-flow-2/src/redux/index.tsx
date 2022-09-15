import reduceUsers from './reduceUsers';
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

//store
const persistConfig = {
  key: 'persist-key',
  storage,
};

//rootreducer
const rootReducer = combineReducers({
  reduceUsers,
});
export default rootReducer;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);
