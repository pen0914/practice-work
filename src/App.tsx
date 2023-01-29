import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

export default function App() {
  const history = useHistory();
  const num = [{ number: "1" }, { number: "2" }, { number: "3" }];
  const [data, setData] = useState<Array<string>>([]);
  const onClickData = (number: string) => {
    setData([`${number}`]);
    history.push({ pathname: "/next", state: { data } });
  };

  return (
    <div className="App">
      {num.map((nu) => {
        return (
          <>
            <button onClick={() => onClickData(nu.number)}>{nu.number}</button>
          </>
        );
      })}
    </div>
  );
}
