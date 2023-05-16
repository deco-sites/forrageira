import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

try {
  const result = await fetch("/abcde");
  console.log(result);
} catch (err) {
  console.log("fetch finished", err);
}
// Lazy load a <dialog> polyfill.
(async () => {
  // @ts-expect-error HTMLDialogElement is not just a type!
  if (IS_BROWSER && window.HTMLDialogElement === "undefined") {
    await import(
      "https://raw.githubusercontent.com/GoogleChrome/dialog-polyfill/5033aac1b74c44f36cde47be3d11f4756f3f8fda/dist/dialog-polyfill.esm.js"
    );
  }
})();
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
