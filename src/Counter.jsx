const Counter = ({ count, setCount }) => {
  /// useState를 사용해서 count라는 변수 만들기 => 초기값은 0
  //   const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        ADD 1
      </button>

      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Minus 1
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        RESET
      </button>
    </div>
  );
};

export default Counter;
