import RightPanel from "./components/common/RightPanel";
import Sidebar from "./components/common/Sidebar";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/signUpPage";
import HomePage from "./pages/home/HomePage";
import { Routes, Route } from 'react-router-dom';
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";


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
          <Route path='/notifications' element={<NotificationPage/>}/>
          <Route path='/profile/:username' element={<ProfilePage/>}/>
        </Routes>
        <RightPanel />
      </div>
    </>
  );
}

export default App
