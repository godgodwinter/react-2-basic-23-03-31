
import { useRecoilState } from 'recoil';
import { counterState } from '../stores/CounterStore';

function ButtonCounter() {
  const [count, setCount] = useRecoilState(counterState);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>Button Counter: {count}</button>
  );
}

export default ButtonCounter;