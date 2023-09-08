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
        stripeKey="pk_test_51NgNrSSD2zvAhNC6r2liwcJSzLrJO4uunrWaSFM3gpBDs0HSJgeEUImi5rG0WghsFVCR9BjrqQc60aXUKtMAmndG00W1ABuSkG"
        currency="INR"
      >
        <button style={{ backgroundColor: "green" }} className="btn">
          PAY NOW
        </button>
      </StripeCheckout>
    </div>
  );
}
