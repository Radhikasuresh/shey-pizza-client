// Ordersscreen.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Ordersscreen() {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector(
    (state) => state.getUserOrdersReducer
  );

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{ fontSize: "35px" }}>My Orders</h2>
      <hr />

      {loading ? (
        <Loading />
      ) : error ? (
        <Error error="Something went wrong" />
      ) : (
        <div className="row justify-content-center">
          {orders.map((order) => (
            <div
              key={order._id}
              className="col-md-8 m-2 p-1"
              data-aos="fade-down"
              style={{ backgroundColor: "#228B22", color: "white" }}
            >
              <div className="flex-container">
                <div className="text-left w-100 m-1">
                  <h2 style={{ fontSize: "25px" }}>Food Items</h2>
                  <hr />
                  {order.orderItems.map((item) => (
                    <div key={item._id}>
                      <p>
                        {item.name} [{item.varient}] * {item.quantity} ={" "}
                        {item.price}
                      </p>
                    </div>
                  ))}
                  <p>
                    Order Status: {order.isDelivered ? "DELIVERED" : "SHIPPING"}
                  </p>
                </div>
                <div className="text-left w-100 m-1">
                  <h2 style={{ fontSize: "25px" }}>Address</h2>
                  <hr />
                  <p>Street: {order.shippingAddress.street}</p>
                  <p>City: {order.shippingAddress.city}</p>
                  <p>Country: {order.shippingAddress.country}</p>
                  <p>Pincode: {order.shippingAddress.pincode}</p>
                </div>
                <div className="text-left w-100 m-1">
                  <h2 style={{ fontSize: "25px" }}>Order Info</h2>
                  <hr />
                  <p>Order Amount: {order.orderAmount}</p>
                  <p>Date: {order.createdAt.substring(0, 10)}</p>
                  <p>Order Id: {order._id}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
