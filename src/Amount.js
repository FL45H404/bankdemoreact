import { useSelector } from "react-redux";
export const Amount = () => {
  const amount = useSelector((state) => state.bank.amount);
  console.log(amount);
  return (
    <>
      <div className="row">
        <h1>${amount}</h1>
      </div>
    </>
  );
};
