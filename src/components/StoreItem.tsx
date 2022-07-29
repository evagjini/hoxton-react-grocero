import { CartItem } from "./CartItem"

export function StoreItem() {
    return (
        <li>
            <div className="store--item-icon">
                <img src={getItemImagePath(item)} />
            </div>
            <button
                onClick={function () {
                    increaseQuantity(item)
                }}

            >
                Add to cart {(item.stock)}</button>
        </li>
    )
}

export default StoreItem