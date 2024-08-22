import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <div className='flex max-w-6xl mx-aut'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/singup' element={<SignUpPage/>}/>
          {/* <Route path='/user' element={<UserPage/>}/>
          <Route path='/followers' element={<FollowersPage/>}/> */}
        </Routes>
      </div>
    </>
  );
}

export default App
