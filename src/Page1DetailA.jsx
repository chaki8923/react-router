import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state);
  const history = useHistory();
  const onClickGoback = () => history.goBack();

  return (
    <div>
      <h1>Page1の詳細ページAです。</h1>
      <br />
      <button onClick={onClickGoback}>戻る</button>
    </div>
  );
};
