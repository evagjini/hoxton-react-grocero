export function CartItem() {
    return (
        <li>
            <img
                className="cart--item-icon"
                src={getItemImagePath(item)}
                alt={item.name}
            />
            <p>{item.name}</p>
            <button className="quantity-btn remove-btn center"
                onClick={function () {
                    desreaseQuantity(item)
                }}
            >
                -
            </button>
            <span className="quantity-text center">1</span>
            <button className="quantity-btn add-btn center"
                onClick={function () {
                    increaseQuantity(item)
                }}
            >
                +
            </button>
        </li>

    )
}