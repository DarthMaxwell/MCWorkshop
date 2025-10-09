import { useEffect, useState } from "react";
import type { Booking, Item, Bike, Storage } from "../../Types/common";
import List from "../../Componets/List/List";
import Spinner from "../../Componets/Spinner/Spinner";
import CollapsibleList from "../../Componets/List/CollapsibleList";
import "./AdminPage.css"

function AdminPage() {
    const [booking, setBooking] = useState<Booking[]>([]);
    const [inventory, setInventory] = useState<Item[]>([]);
    const [bikes, setBikes] = useState<Bike[]>([]);
    const [storage, setStorage] = useState<Storage[]>([]);

    useEffect(() => {
        populateBookingData();
        populateInventoryData();
        populateBikeData();
        populateStorageData();
    }, []);


    return (
        <div className="CollapDiv">
            {(booking) ? <CollapsibleList title={"Booking"} children={<List data={booking} columns={getColumns(booking)} />} /> : <Spinner />}

            {(inventory) ? <CollapsibleList title={"Inventory"} children={<List data={inventory} columns={getColumns(inventory)} />} /> : <Spinner />}

            {(bikes) ? <CollapsibleList title={"Bikes"} children={<List data={bikes} columns={getColumns(bikes)} />} /> : <Spinner />}

            {(storage) ? <CollapsibleList title={"Storage"} children={<List data={storage} columns={getColumns(storage)} />} /> : <Spinner />}

            <p>When open a section should be able to add</p>
        </div>
    );

    function getColumns<T extends object>(list: T[]) {
        return list.length > 0
            ? (Object.keys(list[0]) as Array<keyof T>).map(key => {
                const keyStr = String(key);
                return {
                    key,
                    label: keyStr.charAt(0).toUpperCase() + keyStr.slice(1),
                };
            })
            : [];
    }


    async function populateBookingData() {
        const response = await fetch('api/booking')
        if (response.ok) {
            const data = await response.json();
            setBooking(data);
        } //Need error handling
    }

    async function populateInventoryData() {
        const response = await fetch('api/inventory')
        if (response.ok) {
            const data = await response.json();
            setInventory(data);
        } //Need error handling
    }

    async function populateBikeData() {
        const response = await fetch('api/bike')
        if (response.ok) {
            const data = await response.json();
            setBikes(data);
        } //Need error handling
    }

    async function populateStorageData() {
        const response = await fetch('api/storage')
        if (response.ok) {
            const data = await response.json();
            setStorage(data);
        } //Need error handling
    }
}

export default AdminPage;