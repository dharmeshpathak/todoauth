import React, { useState } from "react";
import {signIn} from "../../actions/authActions"
import { useDispatch,useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import { connect } from "react-redux";
 function SignIn(props) {
  const [values, setValues] = useState({ email: " ", password: " " });
  const uid =useSelector(state=>state.firebase.auth.uid) 
//  console.log(uid)
  const dispatch  = useDispatch();

  function changeValue(e) {
    const { name, value } = e.target;
    setValues(prevState => ({
                ...prevState,
                [name]: value
            }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${values.email}, ${values.password}`);
    dispatch(signIn(values));
    // props.signIn(values)
    
  };
  
  if(uid) return <Redirect to="/"/>
  return (
    <div className="container shadow-lg p-3 mb-5 mt-5 bg-white rounded col-8 col-lg-6 col-xl-6 col-md-6 ">
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
            SignIn
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignIn;
// const mapStateToProps = (state) => {
//   console.log(state);
//   // const uid = state.firebase.auth.uid;
//   // return {
//   //   uid: uid,
//   // };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     signIn: (creds) => dispatch(signIn(creds)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);