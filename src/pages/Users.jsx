import React from 'react'

const mainInfo = [
  {
    name: "Số lượng truy cập",
    id: "1",
    chat: "1",
    admin: "1",
  },
  {
    name: "Hiện đang online",
    id: "2",
    chat: "1",
    admin: "1",
  },
  {
    name: "Người đăng ký mới",
    id: "3",
    chat: "1",
    admin: "1",
  },
  {
    name: "Tăng trưởng",
    id: "4",
    chat: "1",
    admin: "1",
  },
  {
    name: "Danh thu",
    id: "5",
    chat: "1",
    admin: "1",
  },
];

function Users() {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Họ Tên</th>
          <th scope="col">Chat</th>
          <th scope="col">Admin</th>
        </tr>
      </thead>
      <tbody>
        {
          mainInfo.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>
                <input type={'checkbox'}/> 
              </td>
              <td>
              <input type={'checkbox'}/> 
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Users