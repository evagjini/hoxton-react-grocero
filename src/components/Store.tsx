import { StoreItemType, StoreType } from "../App"
import getItemImagePath from "../imagePath"

type Props = {
    store: StoreType
    increaseCartQuantity: (item: StoreItemType) => void

}

function Store({ store, increaseCartQuantity }: Props) {
    return (

        <header id="store">
            <h1>Grocero</h1>
            <ul className="item-list store--item-list">
                {store.map(item => (
                    <li>
                        <div className="store--item-icon">
                            <img src={getItemImagePath(item)} />
                        </div>
                        <button
                            onClick={function () {
                                increaseCartQuantity(item)
                            }}>
                            Add to cart {(item.stock)}</button>
                    </li>
                ))}
            </ul>
        </header>
    )
}


export default Store