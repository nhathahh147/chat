import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useHistory } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const usehistory = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      usehistory.push("/users");
    });
  }

  return (
    <div className="login">
      <div className="login__title">
        Đăng Nhập
      </div>
      <form>
      <div className="form-group">
        <label for="name">Email:</label>
        <input type="email" className="form-control" onChange={handleEmailChange} placeholder="Nhập email" id="name" />
      </div>
      <div className="form-group">
        <label for="pwd">Mật Khẩu:</label>
        <input type="password" className="form-control" onChange={handlePasswordChange} placeholder="Mật Khẩu" id="pwd" />
      </div>
      <button className="btn btn-link" onClick={handleSubmit}>Đăng Nhập</button>
    </form>
    </div>
  )
}

export default Login