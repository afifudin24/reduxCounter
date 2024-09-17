import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementWithCheckingAction, increment } from "../app/features/Counter/actions";

const Counter = () => {
    let {count} = useSelector(state => state.counter);
    console.log(count);
    const dispatch = useDispatch();
    return (
        <div style={{margin : '10px', scale: 10}}>
            <button onClick={() => dispatch(decrementWithCheckingAction(1))}>-</button>
            {' '} <span>{count}</span> {' '}
            <button onClick={() => dispatch(increment(1))}>+</button>
        </div>
    )
}

export default Counter;