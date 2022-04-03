import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);
  const history = useHistory();
  const onClickDeatailA = () => history.push("page1/detailA");

  return (
    <>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>detalA</Link>
      <br />
      <Link to="/page1/detailB">detalB</Link>
      <br />
      <button onClick={onClickDeatailA}>DeatailA</button>
      <div>
        <h1>Page1ページです。</h1>
      </div>
    </>
  );
};
