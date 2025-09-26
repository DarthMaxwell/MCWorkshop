import "./BikeList.css"
import Bike from "../Bike/Bike";
import { useState, useEffect } from "react";

interface Bike {
    picture: string;
    model: string;
    brand: string;
    km: number;
    des: string;
    price: number;
}

function BikeList() {
    const [bikes, setBikes] = useState<Bike[]>([]);

    useEffect(() => {
        populateBikeData();
    }, []);

    return (
        <div className="BikeList">
            {bikes.length > 0 ?
                bikes.map((bike) =>
                <Bike picture={bike.picture} model={bike.model} brand={bike.brand} km={bike.km} des={bike.des} price={bike.price} />)
                : 
                <p>We currently dont have any motorcycles for sale (Maybe down the line we can have a email notification when we have a bike for sale)</p>
            }
        </div>
    );

    async function populateBikeData() {
        const response = await fetch('api/bike')
        if (response.ok) {
            const data = await response.json();
            setBikes(data);
        } //Need error handling
    }
}

export default BikeList;