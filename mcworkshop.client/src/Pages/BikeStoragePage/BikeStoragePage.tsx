import { useState, useEffect } from "react";
import StorageForm from "../../Componets/StorageForm/StorageForm";

function BikeStoragePage() {
    const [space, setSpace] = useState<number>(0);

    useEffect(() => {
        populateSpaceData();
    }, []);

    return (
        <div>
            <h1>Store your bike with us during the winter</h1>
            <p>Nice long image of the storage place</p>
            <p>Price for winter $200</p>
            {space > 0 ? (
                <p>currently we have {space} more spots open</p>
                ) : (
                <p>We are fully booked this winter</p>
                )
            }
            
            <p>can have a waiting list later</p>

            {space > 0 && (<StorageForm />)}
        </div>
    );

    async function populateSpaceData() {
        const response = await fetch('api/storage/space')
        if (response.ok) {
            const data = await response.json();
            setSpace(data);
        }
    }
}

export default BikeStoragePage;