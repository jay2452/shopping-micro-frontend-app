import React from "react";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";
import { Link } from "react-router-dom";

export default function Header({ app }) {
  return (
    <div className="p-5 bg-blue-500 test-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow">
          <Link to="/">Fidget Spinner World</Link> | &nbsp;
          <Link to="/cart" id="cart">Cart</Link>
        </div>
        <div className="flex-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
}
