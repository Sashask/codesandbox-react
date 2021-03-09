import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("レンダリング");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlg] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlg(!faceShowFlag);
  };

  //空配列を渡すと初回レンダリングのみ実行する
  // useEffect(() => {
  //   console.log("useeffect");
  // }, []);

  //渡した配列の中身のステータス変化のみに関心を持たせるレンダリング
  useEffect(() => {
    console.log("useeffect");
    if (num > 0 && num % 2 == 0) {
      //真なら何もしない。偽なら右辺を評価。
      faceShowFlag || setFaceShowFlg(true);
    } else {
      //偽なら何もしない。真なら右辺を評価。
      faceShowFlag && setFaceShowFlg(false);
    }
    //useEffectの引数配列に対するeslintの静的解析警告文をなくすなくす設定
    /* eslint react-hooks/exhaustive-deps: off  */
  }, [num]);

  return (
    <>
      <h1 style={{ color: "green" }}>Hello World!</h1>
      <ColorfulMessage color="red">hogehoge</ColorfulMessage>
      <ColorfulMessage color="pink">fugafuga</ColorfulMessage>
      <button onClick={onClickCountUp}>Count UP</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>☺</p>}
    </>
  );
};

export default App;
