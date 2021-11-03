const initialstate ={
  amount:0,
  bankType:false
};
export const bankReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return {...state,amount:state.amount + action.amount};
    case "WITHDRAW":
      return {...state,amount:state.amount - action.amount};
    case "INTREST":
      return {...state,amount:state.amount*1.05}
    case "DELETE":
      return {...state,amount:0};
    case "CHANGE":
      return {...state,bankType:!state.bankType};
    default:
      return state;
  }
};
