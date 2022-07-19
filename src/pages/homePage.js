import React from "react";
import { useSelector } from "react-redux";

const HomePage = () =>{
    const balance = useSelector(state => state.balance)
    return(
        <div>Home page...{balance}</div>
    )
}

export default HomePage;