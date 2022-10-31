import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue } from 'firebase/database';

function Home() {

  const [list , setList] = useState("");
  const [lists , setLists] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if(data !== null) {
        Object.values(data).map((lists) => {
          setLists((props) => [...props, lists]);
        });
      };
    });
  }, []);

  return (
    <div className="row sm-gutter">

      {lists.map((item, index) => (
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
