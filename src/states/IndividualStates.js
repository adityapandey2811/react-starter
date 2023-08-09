import {useState} from 'react';
import {borderCurve} from "../constants";

export function StateUpdateButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <button className={borderCurve} onClick={handleClick}>{count}</button>
    )
}