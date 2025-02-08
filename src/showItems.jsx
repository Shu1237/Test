import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "./auth/cart";

const Cart = () => {
    const ItemsList = useSelector(state => state.cart.itemsList); // Lấy dữ liệu từ Redux
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(cartAction.removeCart(id))
    }
    const hanleIncreatment = (product) => {
        dispatch(cartAction.up({
            id: product.id,
            price: product.price
        }))
    }
    const handleReduceCart = (id) => {
        dispatch(cartAction.reduce(id))
    }

    console.log(ItemsList)
    return (
        <div>
            {ItemsList.length === 0 ? (
                <p>Giỏ hàng trống</p>
            ) : (
                ItemsList.map((item) => (
                    <div key={item.id} className="border p-4 my-2 flex flex-row justify-between items-center gap-3">
                        <h1 className="text-lg font-bold">{item.name}</h1>
                        <p>Giá: ${item.price}</p>
                        <div className="flex flex-row gap-4">
                            <button onClick={() => hanleIncreatment(item)}>+</button>
                            <p>Số lượng: {item.quantity}</p>
                            <button onClick={() => handleReduceCart(item.id)}>-</button>
                        </div>
                        <p>Tổng: ${item.totalPrice}</p>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>

                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
