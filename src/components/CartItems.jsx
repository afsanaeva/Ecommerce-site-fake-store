import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotal,
  removeFromCart,
} from "../Redux/CartSlice";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CartItems() {
  const cart = useSelector((state) => state.cart.Items);
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleIncreaseCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cards = cart?.map((product) => (
    <div
      className="card lg:card-side bg-white  h-[350] sm:h-[500px] lg:h-80 w-[320px] md:w-[350px] lg:w-11/12 shadow-xl mt-14 mb-1 "
      key={product.id}
    >
      <figure>
        <img
          className=" w-auto  h-80 p-14  rounded-xl"
          src={product.image}
          alt="Album"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-xl">{product.title}</h2>
        <span className="font-semibold text-red-600 text-lg">
          Price: $ {product.price}
        </span>
        <div className="flex gap-2 items-center font-semibold ">
          Quantity:
          <button
            className="bg-slate-900 rounded-full hover:bg-black w-5 h-5 text-white flex flex-row items-center justify-center pb-1"
            onClick={() => handleDecreaseCart(product)}
          >
            -
          </button>
          <div className="">{product.cartQuantity}</div>
          <button
            className=" bg-black rounded-full w-5 h-5 text-white flex flex-row items-center justify-center pb-1 pl-[1px]"
            onClick={() => handleIncreaseCart(product)}
          >
            +
          </button>
        </div>
        <div className="card-actions justify-end ">
          <button
            className="btn  bg-red-600 text-white border-none hover:bg-red-700 rounded-full"
            onClick={() => handleRemoveFromCart(product.id)}
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {cart.length === 0 ? (
        <div className=" flex flex-col justify-center items-center pt-20">
          <h1 className="font-extrabold text-2xl mt-4">Cart is Empty!</h1>
          <img
            src="/src/assets/empty.png"
            className="w-10/1 "
            alt="empty cart"
          />
          <Link to="/">
            <button className="btn btn-wide bg-neutral-700 text-xl border-0 text-white rounded-full hover:bg-black ">
              <FaArrowLeftLong className="mt-1" />
              Start Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="navbar justify-between  bg-white pt-20 fixed z-10">
            <button
              className="btn text-xl bg-red-600 text-white hover:bg-red-800 rounded-full"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
            <h1 className="sm:block hidden font-semibold">
              Total items:
              <span className="font-bold text-red-700">{cart.length}</span>
            </h1>
            <h1 className="sm:block hidden font-semibold">
              Total Amount:
              <span className="font-bold text-green-800">
                $ {cartTotalAmount.toFixed(2)}
              </span>
            </h1>

            <button
              className="btn text-xl bg-green-700 text-white hover:bg-green-800 rounded-full"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Place Order
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box flex flex-col items-center bg-white">
                <h3 className="font-bold text-lg">Confirm order!</h3>
                <p className="py-4 font-semibold">
                  Total Amount:{" "}
                  <span className="font-bold text-green-800">
                    ${cartTotalAmount.toFixed(2)}
                  </span>
                </p>
                <Link
                  to="/Checkout"
                  className="btn btn-wide bg-neutral-900 text-xl border-0 text-white rounded-full hover:bg-black flex items-center"
                >
                  Checkout
                  <FaArrowRightLong className="mt-1 ml-2" />
                </Link>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
          <div className="grid sm:grid-cols-2 place-items-center gap-2 pt-20">
            {cards}
          </div>
        </div>
      )}
    </>
  );
}

export default CartItems;
