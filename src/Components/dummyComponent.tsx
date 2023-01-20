import { useService } from "marketing/useService";
import { GET_FILMS_LIST_SERVICE, GET_COUNTER } from "marketing/constants";

export default function DummyComponent() {

  // Example 1 : SLice Exposed from marketing and added to middleware and redux
  // const { data } = useService(GET_FILMS_LIST_SERVICE);
  // console.log(data);

  // Example 2 : SLice Exposed from marketing and not added to middleware and redux
  // ! Having issue getting state from marketing store
  // ! We need to explore api response encapsulation and mutual explosive
  // const { data } = useService(GET_FILMS_LIST_SERVICE);
  // console.log(data);

  // Example 3 : View Slice Exposed from marketing
  // const { count, increment, decrement } = useService(GET_COUNTER);
  // console.log(count);

  return (
    <div>
      {/* <div>
        <button aria-label="Increment value" onClick={increment}>
          Increment Value from Host
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={decrement}>
          Decrement Value from Host
        </button>
      </div> */}
    </div>
  )
}
