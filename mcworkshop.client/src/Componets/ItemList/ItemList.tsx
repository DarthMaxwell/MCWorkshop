import Item from "../Item/Item";
import "./ItemList.css"

interface Items {
    //productPicture: string;
    productName: string;
    productId: string;
    stock: number;
}

function ItemList() {
    // This will latter pull data from the database
    const items: Items[] = ([
        { productName: "Hiflo Racing oil filter", productId: "HF138RC", stock: 4 },
        { productName: "Chain kit", productId: "FHSDFG56", stock: 5 },
        { productName: "Oil filter", productId: "HF248RC", stock: 10 },
    ]);

    return (
        <div className="ItemList">
            {items.length > 0 ? items.map((item) =>
            <Item productName={item.productName} productId={item.productId} stock={item.stock} />
            ) : (
            <p>We dont currently have anything in stock. If you need something give us a call and well see if we can get it.</p>
            )}
        </div>
  );
}

export default ItemList;