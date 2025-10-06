import { useState, useEffect } from "react";
import StorageForm from "../../Componets/StorageForm/StorageForm";

function BikeStoragePage() {
    const [space, setSpace] = useState<number>(0);

    useEffect(() => {
        populateSpaceData();
    }, []);

    return (
        <div>
            <h1>Store your bike with us during the winter 2025-2026</h1>
            <h2>How it works</h2>
            <p>
                Bike pick up and drop off starts at the end of the season(october to november).
                (If you need sooner please contact us about that) We ask you to drop off your bike
                with a full tank of gas and well add a stabilizer to it. We'll unplug the battery and
                it on a smart charger so to not damage the battery life. You can then pick up your bike
                when the season starts all we need is 1-2 days notice to get it ready. If you select pickup
                you will contacted when you want the bike to be picked up and dropped off.
            </p>
            <h2>NOTES</h2>
            <p>image of the storage place behind the form</p>
            <p>Price for winter $200 you kinda should pay when u book cuase this takes your spot but im not adding payment thigns</p>
            {space > 0 ? (
                <p>Currently we have {space} more spots open</p>
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