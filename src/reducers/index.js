import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import mensReducer from "./mensReducer";
import womensReducer from "./womenReducer";
import phonesReducer from "./phoneReducers";
import cartReducer from "./cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartItems"]
};

const rootReducer = combineReducers({
  mens: mensReducer,
  womens: womensReducer,
  phones: phonesReducer,
  cartItems: cartReducer
});
export default persistReducer(persistConfig, rootReducer);
