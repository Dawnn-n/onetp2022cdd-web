import React from 'react';
import "./style/login.css"

export default function Login() {
    return (
        <section className="login">
            <div className="header">
                <div className="title" />
            </div>
            <form className="login-input">
                <input type="text" id="" placeholder="Username" />
                <input type="password" id="" placeholder="Password" />
                <input type="submit" value="Login" />
                <a>Forgot password?</a>
            </form>
        </section>
    )
}