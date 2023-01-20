import { useService } from "../services";
import { GET_COUNTER } from "../services/constants";

// Dummy Component to be used for reference purposes
export default function Counter() {
  const { count, increment, decrement } = useService(GET_COUNTER);
  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={increment}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
