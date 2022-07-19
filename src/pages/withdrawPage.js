import React from "react";
import { useSelector, useDispatch } from "react-redux";

const WihdrawPage = () =>{
    const balance = useSelector(state => state.balance)
    const dispatch = useDispatch()
    const withdrawHandle = () =>{
     dispatch({type : "WITHDRAW", payload : 10})
    }
    return(
        <div>
        <div>Withdraw page...</div>
        <div>balance {balance}</div>
        <button onClick={withdrawHandle}>Withdraw</button>
        </div>
    )
}

export default WihdrawPage;