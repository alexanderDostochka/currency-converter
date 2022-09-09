import React from "react";
import { useAppSelector, useAppDispatch } from "./redux/hooks";

import { decrement, increment, selectCount } from "./redux/features/counterSlice";

const Test = () => {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    
    return (
        <div>
            {count}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};

export default Test;