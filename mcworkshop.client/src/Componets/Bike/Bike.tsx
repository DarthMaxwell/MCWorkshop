import "./Bike.css"

interface BikeProps {
    picture: string;
    model: string;
    brand: string;
    km: number;
    des: string;
    price: number;
}

const Bike = ({ picture, model, brand, km, des, price }: BikeProps) => {
    return (
        <div className="Bike">
            <img src={"/" + picture} />
            <h1>{model}</h1>
            <p>{brand} - {km}km</p>
            <p>{des}</p>
            <h3>{price}</h3>
        </div>
    );
}

export default Bike;