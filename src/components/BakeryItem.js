// TODO: create a component that displays a single bakery item

export default function BakeryItem(props) {
    const item = props.item;
    const updateCart = props.updateCart;
    const cart = props.cart;
    const handleClick = () => {
        updateCart([...cart, item])
    }
    
    return (
        <div class="card">
            <img src={item.image} alt="alt text"/>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick={handleClick} class="button">Add to Cart</button>
        </div>
    )
}
