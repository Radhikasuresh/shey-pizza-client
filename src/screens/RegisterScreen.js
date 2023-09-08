import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
export default function RegisterScreen() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cPassword, setCPassword] = useState();
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerState;

  const register = () => {
    if (password != cPassword) {
      alert("Passwords does not match");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  };
  return (
    <div className="row justify-content-center mt-5">
      <div className=" .col-md-5 mt-5 text-center shadow-lg p-3 mb-5 bg-white rounded">
        {loading && <Loading />}
        {success && <Success success="User Registered Successfully!" />}
        {error && <Error error="Email Id already exist!" />}
        <h2 className="text-center m-2" style={{ fonSize: "35px" }}>
          Register User
        </h2>
        <div>
          <input
            required
            type="text"
            placeholder="Enter Name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Enter Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            required
            type="text"
            placeholder="Enter Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            required
            type="text"
            placeholder="Confirm Password"
            className="form-control"
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
          <button onClick={register} className="btn mt-3 mb-3">
            REGISTER
          </button>
          <br />
          <a style={{ color: "black" }} href="/login">
            Click here to Login
          </a>
        </div>
      </div>
    </div>
  );
}
