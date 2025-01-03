import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router'
import "./App.css"
import  Home  from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import  Dashboard  from "./Pages/Dashboard";


const App = () => {
  return(
    <div style={{padding:"0",margin:"0"}}>
     {/* Routes */}
     <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          {/* <Route path='*' element={<Navigate to={"not-found"} />} /> */}
        </Routes>
    </div>
    </div>
  )
}

export default App;




      