type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    image: string
}

export function StoreItem({id, name, price, image}: StoreItemProps){
    const quantity = 0;
    return(
        <div>
            <img className="Item-image" src={image} alt={name} />
            <div className="Item-body">
                <h3 className="Item-body__name">{name}</h3>
                <span className="Item-body__price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price)}</span>
            </div>
            <div className="Item-addToCart">
                {
                    quantity === 0 ? (
                        <button className="AddToCartBtn">Add to cart</button>
                    ): 
                    <div className="MoreCartOptions">
                        <div className="MoreCartOptions-changeInCart">
                            <button>-</button>
                            <span>
                            <b>{quantity}</b> in cart
                            </span>
                            <button>+</button>
                        </div>
                        <button className="MoreCartOptions-removeAll">remove</button>
                    </div>
                }
            </div>

        </div>
    )
}