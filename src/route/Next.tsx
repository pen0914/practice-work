import { useLocation } from "react-router-dom";

export const Next = () => {
  const location = useLocation();
  const number = location.state;

  return (
    <>
      <div>Nextページ</div>
      <div>
        <p>選んだ番号は{`${number}`}です</p>
      </div>
    </>
  );
};
