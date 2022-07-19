import React from "react";
import { useSelector, useDispatch } from "react-redux";

const DepositPage = () =>{
    const balance = useSelector(state => state.balance)
    const dispatch = useDispatch()
   const depositHandle = () =>{
     dispatch({type : "DEPOSIT", payload : 10})
   }
    return(
        <div>
            <div>Balance : {balance}</div>
        <div>Deposit page...</div>
        <button onClick={depositHandle}>Deposit</button>
        </div>
    )
}

export default DepositPage;