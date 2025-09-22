import BikeList from "../../Componets/BikeList/BikeList";
import "./BikesPage.css"

function BikesPage() {
    return (
        <div>
            <div className="Intro">
                <h1>We fix bikes and sell them</h1>
                <p>
                    We buy motorcycles and fix them up to get them back on the road for people to enjoy.
                    Below you will find all of our current bikes we have for sale. If you are intressted
                    or have question please call <a href="tel:+4724323574">+47 243 23 574</a>.
                </p>
            </div>
            <BikeList />
        </div>
  );
}

export default BikesPage;