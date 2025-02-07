// 1. useState, useEffect 불러오기
import { useState, useEffect } from "react";

const Timer = () => {
  // 2. useState로 time 이란 변수 선언하기, 초기값 60
  const [time, setTime] = useState(60);

  // 3. useState로 counting 이란 변수 선언하기, 초기값은 false
  const [counting, setCounting] = useState(false);

  // 6. useEffect로 counting 감지해서 콘솔창에 출력하기
  useEffect(() => {
    console.log(counting);
  }, [counting]);

  // 7. useEffect로 counting이 실행됐을 때  1초씩 줄어드는 코드 작성하기
  useEffect(() => {
    if (counting) {
      const id = setInterval(() => {
        setTime((prev) => {
          // 7-1. time이란 숫자가 0 미만으로 가지 않게끔 만들기
          if (prev <= 0) {
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        clearInterval(id);
      };
    }
  }, [counting]);

  return (
    <div>
      {/* 4. h1태그 안에 글자 time으로 출력하기 */}
      <h1>{time}</h1>
      {/* 5. button 만들고 클릭했을 때 counting 스위치 만들어 붙이기, 글자는 counting 일때믄 STOP, 아닐때믄 START라고 입력하기 */}
      <button
        onClick={() => {
          setCounting((prev) => !prev);
        }}
      >
        {counting ? "STOP" : "START"}
      </button>
    </div>
  );
};

export default Timer;
