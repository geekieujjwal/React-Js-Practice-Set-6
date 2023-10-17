import fakeFetch from "./Data";
import { useState, useEffect } from "react";

const Users = () => {
  const [userArr, setUserArr] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [loader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    fakeFetch("https://example.com/api/products").then((res) => {
      setIsLoader(false);
      setUserArr(res.data.products);
      setDataArr(res.data.products);
    });
  }, []);

  const handleButton = (e) => {
    setIsShow(true);
    console.log(e.target.value);
    setDataArr(() => userArr.filter((user) => user.name === e.target.value));
  };
  console.log(dataArr);

  return (
    <div>
      <h1>Heading</h1>
      {loader
        ? "Loading . . ."
        : userArr.map(({ id, name }) => {
            return (
              <button onClick={handleButton} value={name} key={id}>
                Show {name}
              </button>
            );
          })}
      {isShow &&
        dataArr.map(({ id, name, price, desc, src }) => {
          return (
            <div key={id}>
              <img src={src} alt="img" />
              <p>Name: {name}</p>
              <p>Price: {price}</p>
              <p>Description: {desc}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Users;
