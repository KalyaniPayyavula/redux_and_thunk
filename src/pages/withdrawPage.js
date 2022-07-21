import React from "react";
import { useSelector, useDispatch } from "react-redux";

const WihdrawPage = () =>{
    const balance = useSelector(state => state.balanceReducer.balance)
    const dispatch = useDispatch()

    const loan = useSelector(state => state.loanReducer.loan)
    const withdrawHandle = () =>{
     dispatch({type : "WITHDRAW", payload : 10})
    }
    return(
        <div>
        <div>Withdraw page...</div>
        <div>balance {balance}</div>
        <h1>{loan ? "loan applied" : "loan needed"}</h1>
        <button onClick={withdrawHandle}>Withdraw</button>
        </div>
    )
}

export default WihdrawPage;