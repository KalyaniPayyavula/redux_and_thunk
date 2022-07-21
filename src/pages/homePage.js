import React from "react";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () =>{
    const balance = useSelector(state => state.balanceReducer.balance)
    const loan = useSelector(state => state.loanReducer.loan)
    const dispatch = useDispatch()

    const applyLoanHandle = () =>{
    dispatch({type : "APPLY"})
    }
    return(
        <div>
        <div>Home page...{balance}</div>
        <h1>{loan ? "loan applied" : "loan needed"}</h1>
        <button onClick={applyLoanHandle}>{loan ? "Loan Applied" : "Apply Loan"}</button>
        </div>
    )
}

export default HomePage;