import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLoginPage from './Pages/AdminLoginPage';
import DashBoardPage from './Pages/DashBoardPage';

import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RecruiterLogin from './Pages/RecruiterLoginPage';
import RecruiterRegister from './Pages/RecruiterRegisterPage';
import RegisterPage from './Pages/RegisterPage';
import UserProfilePage from './Pages/UserProfilePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/recruiter_login" element={<RecruiterLogin />} />
          <Route path="/admin_login" element={<AdminLoginPage/>}/>
          <Route path="/recruiter_register" element={<RecruiterRegister />} />
          <Route path="/dashboard" element={<DashBoardPage/>} />
          <Route path="/user_profile" element={<UserProfilePage/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
