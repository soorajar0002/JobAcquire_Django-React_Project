import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboardPage from './Pages/AdminDashboardPage';
import AdminLoginPage from './Pages/AdminLoginPage';
import AdminRecruiterManagement from './Pages/AdminRecruiterManagement';
import AdminUserManagementPage from './Pages/AdminUserManagementPage';
import DashBoardPage from './Pages/DashBoardPage';

import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RecruiterLogin from './Pages/RecruiterLoginPage';
import RecruiterRegister from './Pages/RecruiterRegisterPage';
import RegisterPage from './Pages/RegisterPage';
import UserProfileEditPage from './Pages/UserProfileEditPage';
import UserProfilePage from './Pages/UserProfilePage';
import PrivateRoute from './Route/PrivateRoute';
import AdminRoutes from './Route/AdminRoutes';
import RecruiterRouter from './Route/RecruiterRouter';
import RecruiterProfilePage from './Pages/RecruiterProfilePage';
import RecruiterProfileEditPage from './Pages/RecruiterProfileEditPage';
import RecruiterJobListPage from './Pages/RecruiterJobListPage.js';
import RecruiterJobAddPage from './Pages/RecruiterJobAddPage';
import RecruiterJobEditPage from './Pages/RecruiterJobEditPage';
import RecruiterPostBuy from './Components/Recruiter/RecruiterPostBuy/RecruiterPostBuy';
import RecruiterPostBuyPage from './Pages/RecruiterPostBuyPage';
import UserJobDiscoverPage from './Pages/UserJobDiscoverPage';
import UserJobDetailedPage from './Pages/UserJobDetailedPage';
import OTPPage from './Pages/OTPPage';
import AdminPostApprovePage from './Pages/AdminPostApprovePage';
import PaymentPage from './Pages/PaymentPage';
import UserAppliedJobsPage from './Pages/UserAppliedJobsPage';
import RecruiterJobApplicationPage from './Pages/RecruiterJobApplicationPage';
import RecruiterUserProfilePage from './Pages/RecruiterUserProfilePage';
import AdminPaymentPage from './Pages/AdminPaymentPage'
import AdminUserPage from './Pages/AdminUserPage'
import AdminRecruiterPage from './Pages/AdminRecruiterPage'

function App() {
  return (
    <div className="App relative ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage /> } exact/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/otp/:id" element={<OTPPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/recruiter_login" element={<RecruiterLogin />} />
          <Route path="/recruiter_register" element={<RecruiterRegister />} />
          <Route path="/admin_login" element={<AdminLoginPage/>}/>
          
          <Route path="/admin_payment_page" element={<AdminPaymentPage/>}/>
          <Route path="/admin_user_page" element={<AdminUserPage/>}/>
          <Route path="/admin_recruiter_page" element={<AdminRecruiterPage/>}/>
          


          <Route  element={<PrivateRoute/>}>
            <Route path="/dashboard" element={<DashBoardPage/>} />
            <Route path="/user_profile" element={<UserProfilePage/>} />
            <Route path="/user_profile_edit" element={<UserProfileEditPage/>} />
            <Route path="user_job_discover" element={<UserJobDiscoverPage/>} />
            <Route path="/user_job_detailed/:postId" element={<UserJobDetailedPage/>} />
            <Route path="/user_applied_jobs" element={<UserAppliedJobsPage/>} />
          </Route>

         
          <Route  element={<AdminRoutes/>}>
            <Route path="/admin_dashboard" element={<AdminDashboardPage/>}/>
            <Route path="/admin_user" element={<AdminUserManagementPage/>}/>
            <Route path="/admin_recruiter" element={<AdminRecruiterManagement/>}/>
            <Route path="/admin_approve_post/:id" element={<AdminPostApprovePage/>}/>
          </Route>


          <Route  element={<RecruiterRouter/>}>
          <Route path="/recruiter_profile" element={<RecruiterProfilePage/>}/>
          <Route path="/recruiter_profile_edit" element={<RecruiterProfileEditPage/>}/>
          <Route path="/recruiter_job_list" element={<RecruiterJobListPage/>}/>
          <Route path="/recruiter_add_job" element={<RecruiterJobAddPage/>}/>
          <Route path="/payment/:planId" element={<PaymentPage/>}/>
          <Route path="/recruiter_job_edit/:jobId" element={<RecruiterJobEditPage/>}/>
          <Route path="/recruiter_buy_post" element={<RecruiterPostBuyPage/>}/>
          <Route path="/recruiter_job_application" element={<RecruiterJobApplicationPage/>}/>
          <Route path="/recruiter_user_profile/:id" element={<RecruiterUserProfilePage/>}/>
          
          
            
          </Route>
          
          
          
          
        </Routes>
       
      </BrowserRouter>
      
    </div>
  );
}

export default App;
