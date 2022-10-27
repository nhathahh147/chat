import React from 'react'

function Login() {
  return (
    <div className="login">
      <div className="login__title">
        Đăng Nhập
      </div>
      <form>
      <div className="form-group">
        <label for="name">Tên Đăng Nhập:</label>
        <input type="text" className="form-control" placeholder="Tên Đăng Nhập" id="name" />
      </div>
      <div className="form-group">
        <label for="pwd">Mật Khẩu:</label>
        <input type="password" className="form-control" placeholder="Mật Khẩu" id="pwd" />
      </div>
      <button type="submit" className="btn btn-link"><a href="/users">Đăng Nhập</a></button>
    </form>
    </div>
  )
}

export default Login