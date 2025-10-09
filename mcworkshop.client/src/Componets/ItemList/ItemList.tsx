import { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css"
import Spinner from "../Spinner/Spinner";
import type { Item as ItemType } from "../../Types/common";

function ItemList() {
    const [inventory, setInventory] = useState<ItemType[] | null>(null);

    useEffect(() => {
        populateInventoryData();
    }, []);

    return (
        <div className="ItemList">
            {insertData()}
        </div>
    );

    function insertData() {
        if (inventory) {
            if (inventory.length > 0) {
                return (inventory.map((item) =>
                    <Item picture={item.picture} name={item.name} itemId={item.itemId} stock={item.stock} />));
                } else {
                return (<p>We dont currently have anything in stock. If you need something give us a call and well see if we can get it.</p>);
            }
        }

        return (<Spinner />);
    }

    async function populateInventoryData() {
        const response = await fetch('api/inventory')
        if (response.ok) {
            const data = await response.json();
            setInventory(data);
        } //Need error handling
    }
}

export default ItemList;