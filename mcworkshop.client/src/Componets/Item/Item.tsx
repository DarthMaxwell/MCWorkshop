import "./Item.css"

interface Props {
    productPicture: string;
    productName: string;
    productId: string;
    stock: number;
}

const Item = ({ productPicture, productName, productId, stock }: Props) => {
    return (
        <div className="Item">
            <img src={"/" + productPicture} />
            <h1>{productName}</h1>
            <p className="ProductId">{productId}</p>
            <p>Stock: {stock}</p>
        </div>
    );
}

export default Item;