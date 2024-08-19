import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import UserLogin from "./component/SignupPage";

function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<UserLogin/>}/>
      </Routes>
    </>
  )
}

export default App;