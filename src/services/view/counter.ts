import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../redux/view/counterSlice";
import { RootState } from "../../redux/store";

export const useCounter = () => {
  const count = useSelector((store: RootState) => store.counter.value);
  const dispatch = useDispatch();
  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByAmount: (value: number) => incrementByAmount(value),
  };
};
