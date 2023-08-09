import {borderCurve} from '../constants'
export function StateUpdateButtonCommon({count, onClick}){
    return (
        <button className={borderCurve} onClick={onClick}>{count}</button>
    )
}