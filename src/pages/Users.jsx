import React from 'react'

const mainInfo = [
  {
    name: "Nguyễn Văn A",
    id: "1",
    chat: "1",
    admin: "1",
  },
  {
    name: "Nguyễn Văn A",
    id: "2",
    chat: "1",
    admin: "1",
  },
  {
    name: "Nguyễn Văn A",
    id: "3",
    chat: "1",
    admin: "1",
  },
  {
    name: "Nguyễn Văn A",
    id: "4",
    chat: "1",
    admin: "1",
  },
  {
    name: "Nguyễn Văn A",
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