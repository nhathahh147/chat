import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="header__logo">
          <a href="/" className="header__logo-link">
            <span className="header__logo-img">
              <img src="assets/images/logo-dark.png" alt="" height="17"/>
            </span>
          </a>
        </div>
        <div className="user">
          <img src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg" className="user__img" alt="" />
          <span className="user__name">Nhật Hạ</span>
        </div>
      </div>
    </header>
  )
}

export default Header