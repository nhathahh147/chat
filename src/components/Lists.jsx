import React from "react";

const mainNav = [
  {
    display: "Tổng quan",
    path: "/",
  },
  {
    display: "Phân quyền",
    path: "/users",
  },
  {
    display: "Chat",
    path: "/chat",
  },
  {
    display: "Login",
    path: "/login",
  },
  {
    display: "Register",
    path: "/register",
  },
  {
    display: "Index",
    path: "/index",
  },
];

const Lists = () => {
  return (
    <div className="header">
      <nav class="category">
        <h3 class="category__heading">Danh Mục</h3>
        {
          mainNav.map((item, index) => (
            <ul class="list-group">
              <li class="list-group-item">
                <a href={item.path} className="category-item__link" key={index}>{item.display}</a>
              </li>
            </ul>
          ))
        }
      </nav>
    </div>
  );
};

export default Lists;
