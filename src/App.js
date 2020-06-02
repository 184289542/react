import React from 'react';
// import Myrouter from "./router/router"
import Home from "./pages/home/Home"
import axios from "axios"

axios.defaults.withCredentials = true//解决后端其它接口访问不到session的问题

function App() {
    return (
      <div>
        <Home></Home>
	      {/* <Myrouter></Myrouter> */}
      </div>
    )
}

export default App;
