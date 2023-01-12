import logo from './logo.svg';
import './App.css';
import { Outlet, Link, Route, Routes, BrowserRouter } from "react-router-dom";
import LoginSite from './components/user-site/login-site/login-site';
import CookieConsent from "react-cookie-consent";
import PrivacyPolicy from './components/privacy-policy/privacy-policy';
import FormApprovalPage from './components/admin-sites/form-approval-page/form-approval-page' 
import UserSiteApplicationForm from './components/user-site/application-form/application-form';
import UserSiteApprovalPage from './components/user-site/approval-page/approval-page'
import ApprovalPending from './components/admin-sites/approval-pending/approval-pending'
import Layout from './components/Layout/Layout.js';
// https://www.npmjs.com/package/react-cookie-consent

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<LoginSite />} />
          <Route path="userform" element={<UserSiteApplicationForm />} />
          <Route path="usersiteapproval" element={<UserSiteApprovalPage />} />
          <Route path="pendingApproval" element={<ApprovalPending />}/>
          <Route path="formapprovalpage" element={<FormApprovalPage />} />
         </Route>
      </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}

export default App;
