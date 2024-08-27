import RightPanel from "./components/common/RightPanel";
import Sidebar from "./components/common/Sidebar";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/signUpPage";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <div className='flex max-w-6xl mx-aut'>
        {/* Common component, bc it's not weapped with Routes */}
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          {/* <Route path='/user' element={<UserPage/>}/>
          <Route path='/followers' element={<FollowersPage/>}/> */}
        </Routes>
        <RightPanel />
      </div>
    </>
  );
}

export default App
