import { useState } from "react";

const Like = () => {
  const [liked, setLiked] = useState(false);
  /// useState 사용해서 liked 라는 변수 선언하기 초기값으로 false

  // button 클릭했을 때 like되게 구현

  //liked 참일때 좋아합니다. 거짓일 떄는 좋아하지 않습니다.
  return (
    <div>
      <h1>Like</h1>
      <button
        onClick={() => {
          // boolean useState =>
          // 1. setLiked(true)
          // 2. setLiked(false)
          // 3. setLiked (prev => !prev)
          setLiked((prev) => !prev);
        }}
      >
        {liked ? "좋아합니다" : "좋아하지 않습니다"}
      </button>
    </div>
  );
};

export default Like;
