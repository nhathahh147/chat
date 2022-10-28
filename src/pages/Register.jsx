import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useHistory } from "react-router-dom";

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const usehistory = useHistory();

  const handldeName = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, name, email, password).then(() => {
      usehistory.push("/login");
    });
  }


  return (
    <div className="register">
      <div className="register__title">
        Đăng Ký
      </div>
      <form>
      <div className="form-group">
        <label for="name">Họ và tên:</label>
        <input type="text" className="form-control" onChange={handldeName} placeholder="Họ và tên" id="name" />
      </div>
      <div className="form-group">
        <label for="name">Email:</label>
        <input type="text" className="form-control" onChange={handleEmailChange} placeholder="Email Đăng Nhập" id="name" />
      </div>
      <div className="form-group">
        <label for="pwd">Mật Khẩu:</label>
        <input type="password" className="form-control" onChange={handlePasswordChange} placeholder="Mật Khẩu" id="pwd" />
      </div>
      <button type="submit" onChange={handleSubmit} className="btn btn-link"><a href="/login">Đăng Ký</a></button>
    </form>
    </div>
  )
}

export default Register