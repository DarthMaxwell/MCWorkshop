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
        // Will call api for datalater
        setBikes([
            { picture: "mt09.png", model: "MT-09", brand: "Yamaha", km: 38000, des: "2015 Yamah MT-09. Comes with full system and saddle bags. Was an amazing bike but its time for it to go", price: 7000 },
            { picture: "zx10r.png", model: "ZX-10R", brand: "Kawasaki", km: 10000, des: "I want to buy this bike one day it looked way better then the S1k", price: 0 },
            { picture: "r3.png", model: "R3", brand: "Yamaha", km: 42000, des: "Alis bike but I stole it so now im selling it", price: 5500 },
            { picture: "r6.png", model: "R6", brand: "Yamaha", km: 100000, des: "Radnom bke I found kinda old but who knows", price: 6000 },
            { picture: "cbr600rr.png", model: "CBR-600RR", brand: "Honda", km: 45000, des: "Gfs bike also stole it big Yoink", price: 5000 },
            { picture: "s1k.png", model: "S1000", brand: "BMW", km: 0, des: "Brand new big forhead bike", price: 10000 },
        ]);
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
}

export default BikeList;