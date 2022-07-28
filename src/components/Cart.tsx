import { CartList } from "./CartLlist";
import { Total } from "./Total";

export function Cart() {
    return (
        <main id="cart">
            <h2>Your Cart</h2>

            <div className="cart--item-list-container">
                <CartList />
            </div>

            <Total />

        </main>
    )
}