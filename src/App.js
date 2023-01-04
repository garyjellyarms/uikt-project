import logo from './logo.svg';
import './App.css';
import LoginSite from './components/user-site/login-site/login-site';
import CookieConsent from "react-cookie-consent";
import PrivacyPolicy from './components/privacy-policy/privacy-policy';
import UserSiteApplicationForm from './components/user-site/application-form/application-form';
// https://www.npmjs.com/package/react-cookie-consent

function App() {
  return (
    <div className="App">
      <LoginSite/>

      <CookieConsent
        location="bottom"
        buttonText="Potrdi"
        declineButtonText="Zavrni"
        cookieName="gdprCookieConsent"
        style={{ background: "#252625" }}
        buttonStyle={{ background: "#0abf00", color:"#ffffff"}}
        declineButtonStyle={{ background : "#fa4a2f"}}
        expires={1}
        enableDeclineButton
        onAccept={() => {
          alert("Accepted");
        }}
        onDecline={() => {
          alert("Declined");
        }}
      >
        Ta stran uporablja piškotke.{" "}
        <span style={{ fontSize: "15px" }}><a href="/privacy-policy-page">Izjava o zasebnosti</a></span>
      </CookieConsent>
    </div>
  );
}

export default App;
