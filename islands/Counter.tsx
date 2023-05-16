import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

try {
  const resp = await fetch("/abcde");
  console.log(resp);
} catch (err) {
  console.log("err", err);
}
interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div>
      <p>{count}</p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}
