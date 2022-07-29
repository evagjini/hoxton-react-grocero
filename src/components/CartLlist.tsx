import { CartItem } from "./CartItem";
import StoreItem from "./StoreItem";

export function CartList() {
    return (
        <ul className="item-list cart--item-list">

            {cart.map(item => (

                <CartItem />



            )

            )
            }





        </ul>

    )
}
