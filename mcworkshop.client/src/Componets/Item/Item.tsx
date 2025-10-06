import "./Item.css"

interface Props {
    picture: string;
    name: string;
    itemId: string;
    stock: number;
}

const Item = ({ picture, name, itemId, stock }: Props) => {
    return (
        <div className="Item">
            <img src={"/" + picture} />
            <h1>{name}</h1>
            <p className="ProductId">{itemId}</p>
            <p>Stock: {stock}</p>
        </div>
    );
}

export default Item;