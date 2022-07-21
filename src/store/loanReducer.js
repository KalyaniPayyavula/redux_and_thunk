const intialState = {
    loan : false
}

const loanReducer = (state=intialState, action) => {
switch(action.type){
    case "APPLY":
        return {loan : true}
    default: return state
}}

export default loanReducer;