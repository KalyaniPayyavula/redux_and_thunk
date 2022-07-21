import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as balanceActions from '../actions/balanceAction'

const DepositPage = () =>{
    const balance = useSelector(state => state.balanceReducer.balance)
    const loading = useSelector(state => state.balanceReducer.loading)
    const dispatch = useDispatch()
    const loan = useSelector(state => state.loanReducer.loan)
   const depositHandle = () =>{
     dispatch(balanceActions.depositAsync())
   }
    return(
        <div>
            {
                loading ? <h1>Loading...</h1> : <div>Balance : {balance}</div>
            }
        
        <div>Deposit page...</div>
        <h1>{loan ? "loan applied" : "loan needed"}</h1>
        <button onClick={depositHandle}>Deposit</button>
        </div>
    )
}

export default DepositPage;