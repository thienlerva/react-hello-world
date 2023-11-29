import { useEffect, useState } from "react";


function App() {

  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function() { //load first advice
    getAdvice();
  }, []);

  return (
    <div>
      {/* {} to use javascript */}
      <h1>{advice}</h1>
      <button onClick={getAdvice}>get advice</button>
      <Message count={count}/>
    </div>
  );
}

function Message(props) {
  return (
    <p>You have read <strong>{props.count}</strong> pieces of advice</p>
  );
}

export default App;
