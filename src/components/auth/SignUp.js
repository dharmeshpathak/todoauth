import React, { useState } from "react";
import {signUp} from "../../actions/authActions"
import { useDispatch,useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
export default function SignUp(props) {
  const [values, setValues] = useState({ email: " ", password: " " });
  const uid =useSelector(state=>state.firebase.auth.uid) 
  
  const dispatch  = useDispatch();
  function changeValue(e) {
    const { name, value } = e.target;
    setValues(prevState => ({
                ...prevState,
                [name]: value
            }));
  }
  // console.log(values.password);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`${values.email}, ${values.password}`);
    dispatch(signUp(values));
  };
  if (uid) return <Redirect to="/" />;
  return (
    <div className="container shadow-lg p-3 mt-5 mb-5 bg-white rounded col-8 col-lg-6 col-xl-6 col-md-6 ">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-3 mt-5  d-flex justify-content-center  ">
          <input
            className=" px-2 py-2 col-lg-6 form-control "
            autoComplete="None "
            type="email"
            name="email"
            placeholder="Enter username"
            onChange={changeValue}
            style={{
              border: "none",
              backgroundColor: "lightcyan",
              color: "red",
              borderColor: "transparent",
              outline: "none",
              borderBottom: "2px solid blue",
              fontFamily: "georgia",
              borderRadius: "0px",
              borderTop: "None",
            }}
          />
        </div>
        <div className="mb-3 mt-5  d-flex justify-content-center">
          <input
            type="password"
            className=" px-2 py-2 col-lg-6 form-control "
            autoComplete="None "
            name="password"
            placeholder="Enter password"
            onChange={changeValue}
            style={{
              border: "none",
              backgroundColor: "lightcyan",
              color: "red",
              borderColor: "transparent",
              outline: "none",
              borderBottom: "2px solid blue",
              fontFamily: "georgia",
              borderRadius: "0px",
            }}
          />
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary ">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}
