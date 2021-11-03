import { Amount } from "./Amount";
import React, { useState } from "react";
import { DEPOSIT, WITHDRAW, INTREST, DELETE, LOGIN } from "./reducer/Action";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <Amount />
        <div className="row ">
          <div className="col-md-10 mb-3">
            <input
              type="text"
              value={data}
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
          </div>
          <div className="d-flex justify-content-around">
            <button
              type="button"
              className="btn btn-primary gx-3"
              onClick={() => {
                console.log(data);
                dispatch(DEPOSIT(data));
                setData("");
              }}
              placeholder="enter amount"
            >
              DEPOSIT
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                dispatch(WITHDRAW(data));
                setData("");
              }}
            >
              WITHDRAW
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                dispatch(INTREST());
              }}
            >
              INTREST
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                dispatch(DELETE());
              }}
            >
              DELETE
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                dispatch(LOGIN());
              }}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
