const intialState = {
    balance : 0
}
const reducer = ({state=intialState,action}) =>{
switch(action.type){
    case "DEPOSIT":
        return {balance: state.balance + action.payload}
    case "WITHDRAW":
        return {balance: state.balance - action.payload}
    default: return state
}
}

export default reducer;