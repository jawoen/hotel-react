import { combineReducers } from "redux";
import special from "./speical";

//루트 리듀서
const rootReducer = combineReducers({ special: special});
export default rootReducer;