import React from "react";

const mainInfo = [
  {
    display: "Số lượng truy cập",
    number: "899",
  },
  {
    display: "Hiện đang online",
    number: "456",
  },
  {
    display: "Người đăng ký mới",
    number: "1236",
  },
  {
    display: "Tăng trưởng",
    number: "1236",
  },
  {
    display: "Danh thu",
    number: "1236",
  },
];

function Home() {
  return (
    <div className="row sm-gutter">

      {mainInfo.map((item, index) => (
        <div className="col l-2-4 m-4 c-6">
          <div className="info" key={index}>
            <div className="info__title">{item.display}</div>
            <span className="info__number">{item.number}</span>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Home;
