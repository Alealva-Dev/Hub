import { combineReducers } from "redux";

import auth from "./auth/index";
import global from "./global/index";

export default () =>
  combineReducers({
    authState: auth,
    globalState: global,
});
