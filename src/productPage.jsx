import { useDispatch, useSelector } from "react-redux";
import { authAcctions } from "./auth/authLogin";
import { cartAction } from "./auth/cart";
import img from './assets/react.svg';
import { useMemo, useState } from "react";
import ShowItems from "./showItems";

const products = [
    { id: 1, nameDev: "MacBook", price: 25, image: img },
    { id: 2, nameDev: "Lenovo Yoga", price: 25, image: img },
    { id: 3, nameDev: "Dell Latitude", price: 25, image: img },
    { id: 4, nameDev: "HP Pavilion", price: 25, image: img },
    { id: 5, nameDev: "Acer Aspire", price: 25, image: img }
];

const ProductPage = () => {
    const cartItems = useSelector((state) => state.cart.itemsList);
    const dispatch = useDispatch();
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
    const isShow = useSelector((state) => state.cart.showCart)
    const totalPriceAll = useSelector((state) => state.cart.totalPriceAll)
    console.log(cartItems)
    const addToCart = (product) => {
        dispatch(cartAction.addToCart({
            id: product.id,
            name: product.nameDev,
            price: product.price,
        }));
    };

    return (
        <>
            <div className="p-6 bg-gray-100 min-h-screen">
                <h2 className="text-3xl font-bold text-center mb-6">Redux Shopping App</h2>
                <div className="flex justify-between items-center mb-4 px-6">
                    <span className="text-lg font-semibold">Cart: {totalQuantity} Items</span>
                    <button
                        onClick={() => dispatch(authAcctions.logout())}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
                    >
                        Log out
                    </button>
                </div>
                <div className="grid grid-cols-5 gap-6 px-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 text-center">
                            <img src={product.image} alt={product.nameDev} className="w-full  object-cover rounded" />
                            <h3 className="text-lg font-semibold mt-2">{product.nameDev}</h3>
                            <p className="text-gray-600">${product.price}</p>
                            <button
                                className="mt-2 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900 transition"
                                onClick={() => addToCart(product)}
                            >
                                Add to cart
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <p className="text-xl font-semibold">Total: ${totalPriceAll}</p>
                    <div className="flex items-center gap-3 justify-center">
                        <button className="mt-2 px-6 py-3 bg-orange-500 text-white font-bold rounded hover:bg-orange-700 transition">
                            Place Order
                        </button>
                        <button onClick={() => dispatch(cartAction.showCart())} className="mt-2 px-6 py-3 bg-orange-500 text-white font-bold rounded hover:bg-orange-700 transition">
                            Show All Items
                        </button>
                    </div>
                </div>
                {
                    isShow ? <ShowItems /> : ''
                }
            </div>

        </>

    );
};

export default ProductPage;
