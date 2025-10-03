import { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css"

interface Item {
    picture: string;
    name: string;
    itemId: string;
    stock: number;
}

function ItemList() {
    const [inventory, setInventory] = useState<Item[]>([]);

    useEffect(() => {
        populateInventoryData();
    }, []);

    return (
        <div className="ItemList">
            {inventory.length > 0 ? inventory.map((item) =>
                <Item picture={item.picture} name={item.name} itemId={item.itemId} stock={item.stock} />
            ) : (
            <p>We dont currently have anything in stock. If you need something give us a call and well see if we can get it.</p>
            )}
        </div>
    );

    async function populateInventoryData() {
        const response = await fetch('api/inventory')
        if (response.ok) {
            const data = await response.json();
            setInventory(data);
        } //Need error handling
    }
}

export default ItemList;