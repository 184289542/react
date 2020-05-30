import {createStore} from "redux";
import reducer from "./reducer";


//1.创建仓库 createStore
const store = createStore(reducer);

export default store;