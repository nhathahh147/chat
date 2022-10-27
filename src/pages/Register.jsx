import React from 'react'

const Register = () => {
  return (
    <div className="register">
      <div className="register__title">
        Đăng Ký
      </div>
      <form>
      <div className="form-group">
        <label for="name">Họ và tên:</label>
        <input type="text" className="form-control" placeholder="Họ và tên" id="name" />
      </div>
      <div className="form-group">
        <label for="name">Tên Đăng Nhập:</label>
        <input type="text" className="form-control" placeholder="Tên Đăng Nhập" id="name" />
      </div>
      <div className="form-group">
        <label for="pwd">Mật Khẩu:</label>
        <input type="password" className="form-control" placeholder="Mật Khẩu" id="pwd" />
      </div>
      <button type="submit" className="btn btn-link"><a href="/login">Đăng Ký</a></button>
    </form>
    </div>
  )
}

export default Register