const Product = ({img, title, price, addToBasket, id, handleSubmit}) => {
    return (
        <div className="product" key={id}>
            <img src={img}  alt="" />
            <p>{title}</p>
            <h3>{price}</h3>
            <button onClick={() => {addToBasket(id-1)
             handleSubmit()}}>Savatga</button>
        </div>
    );
};

export default Product;