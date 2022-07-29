
export function Total() {
    return (
        <div className="total-section" >
            <div>
                <h3>Total</h3>
            </div>

            <div>
                <span className="total-number">£{getTotalPrice().toFixed(2)}</span>
            </div>
        </div >
    )
}