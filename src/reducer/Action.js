export const DEPOSIT = (data) => {
  return {
    type: "DEPOSIT",
    amount: Number(data)
  };
};

export const WITHDRAW = (data) => {
  return {
    type: "WITHDRAW",
    amount: Number(data)
  };
};
export const INTREST = () => {
  return {
    type: "INTREST"
  };
};
export const DELETE =()=>{
  return {
    type: "DELETE"
  };
};
export const CHANGE =()=>{
  return {
    type: "CHANGE"
  };
};
export const LOGIN =()=>{
  return {
    type: "LOGIN"
  };
};


