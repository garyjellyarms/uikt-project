import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom/client";
import CookieConsent from 'react-cookie-consent';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import './Layout.css';

const Layout = () => (
  <div className="Layout">
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="userform">UserForm</Link>
        </li>
        <li>
          <Link to="usersiteapproval">User</Link>
        </li>
        <li>
          <Link to="pendingApproval">FormApproval</Link>
        </li>
        <li>
          <Link to="formapprovalpage">FormApprovalPage</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
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

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
