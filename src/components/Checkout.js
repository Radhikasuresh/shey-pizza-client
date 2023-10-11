import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;

  const dispatch = useDispatch();

  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order is Placed Successfully😃" />}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51NgNrSSD2zvAhNC6lI0wuYyAbka2tKKn0d9VeZOkQloBaF9jqP2hii7GgVNXV0nivYdhHpGZls44piFBD79j5abg00apTzB5Vm"
        currency="INR"
      >
        <button style={{ backgroundColor: "green" }} className="btn">
          PAY NOW
        </button>
      </StripeCheckout>
    </div>
  );
}
