import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  //pathに設定したプロパティ名。今回はid
  const { id } = useParams();
  //分割代入でsearchという名前に対応したプロパティの値を取得
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);

  return (
    <div>
      <h1>UrlParameterページです。</h1>
      <p>パラメーターは{id}です</p>
      <p>クエリパラメーターは{query.get("name")}です</p>
    </div>
  );
};
