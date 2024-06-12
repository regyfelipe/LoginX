import React from "react";

import bgContainer from "../../assets/images/bg.png";
import bgLua from "../../assets/images/bg-lua.png";

import logoImg from "../../assets/images/logo.png";
import iconGoggle from "../../assets/icons/google.svg";

import "./style.css";

export class Main extends React.Component {
  render() {
    return (
      <main className="container-bg">
        <img className="bt-lua" src={bgLua} alt="" />
        <div className="bg-img">
          <img src={bgContainer} alt="" className="bg" />
        </div>

        <section className="login-container">
          <div className="login-page">
            <div className="login-header">
              <img src={logoImg} alt="" className="logo" />
              <h2>Login to your Account </h2>
              <p>See what is going on with your business</p>
            </div>

            <button className="btn-google">
              <img src={iconGoggle} alt="" className="icon-google" />
              Continue with Google
            </button>

            <div className="liners">
              <div className="liner"></div>
              <span>or Sign in with Email</span>
              <div className="liner"></div>
            </div>

            <form action="">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />

              <label className="label-password" htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </form>

            <div className="remember-forgot">
              <div className="remember-me">
                <input type="checkbox" name="" id="remember-me-checkbox" />
                <span>Remember Me</span>
              </div>

              <div className="forgot-password">
                <span>Forgot Password?</span>
              </div>
            </div>

            <button className="btn-login">Login</button>

            <footer>
              Not Registered Yet? <a href="/"> Create an account</a>
            </footer>
          </div>
        </section>
      </main>
    );
  }
}
