import { StoreItemType } from "../App"
import getItemImagePath from "../imagePath"


type Props = {
    cart: StoreItemType[]
    decreaseQuantity: (item: StoreItemType) => void
    increaseCartQuantity: (item: StoreItemType) => void
    total: string



}
function Cart({ cart, decreaseQuantity, increaseCartQuantity, total }: Props) {
    return (
        <main id="cart">
            <h2>Your Cart</h2>

            <div className="cart--item-list-container">
                <ul className="item-list cart--item-list">
                    {cart.map(item => (
                        <li>
                            <img
                                className="cart--item-icon"
                                src={getItemImagePath(item)}
                                alt={item.name}
                            />
                            <p>{item.name}</p>
                            <button className="quantity-btn remove-btn center"
                                onClick={function () {
                                    decreaseQuantity(item)
                                }}>
                                -
                            </button>
                            <span className="quantity-text center">{item.inCard}</span>
                            <button className="quantity-btn add-btn center"
                                onClick={function () {
                                    increaseCartQuantity(item)
                                }}
                            >
                                +
                            </button>
                        </li>

                    ))}

                </ul>
            </div>

            <div className="total-section">
                <div>
                    <h3>Total</h3>
                </div>

                <div>
                    <span className="total-number">{total}</span>
                </div>
            </div>
        </main>

    )

}


export default Cart