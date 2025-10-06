import { Link } from "react-router";
import "./HomePage.css"

function HomePage() {
    return (
        <div className="HomePage">
            <h1>Motocycle Workshop</h1>
            {/* ABOUT US SECTION */}
            {/* Google maps api to our spot and a east copy to a map system */}

            <div className="OtherPages">
                <div className="section">
                    <div className="text">
                        <h1>Book an appointment</h1>
                        <p>
                            We service all makes and models. We do full services, tires, chain kits, suspesntion rebuild.
                            We also are able to install profomance parts like upgraded brakes. We also offer tuning.
                            Some services take longer than others but most our services we can do in a day. Below is a button
                            book an appointment there you can select the day and what you need done we will then contact you
                            to confirm things.
                        </p>
                        <Link to="/booking"><a className="btn">Book you appointment here</a></Link>
                    </div>
                    
                    <div className="image">
                        <img src="/booking.jpg" />
                    </div>
                </div>

                <div className="section reverse">
                    <div className="text">
                        <h1>Check out our inventory of parts</h1>
                        <p>
                            We keep a suply of what we consider essnestials for common oil changes and other simple
                            services. If we have somthing you need feel free to stop by and pick it up. We can also
                            order parts or you can bring us parts to install.
                        </p>
                        <Link to="/inventory"><a className="btn">Check out what we have</a></Link>
                    </div>

                    <div className="image">
                        <img src="/inventory.jpg" />
                    </div>
                </div>

                <div className="section">
                    <div className="text">
                        <h1>Check out our bikes for sale</h1>
                        <p>
                            We love working on bikes so natually we end up having to many. These bikes are all ready
                            to hit the road.
                        </p>
                        <Link to="/bikes"><a className="btn">View out current selection</a></Link>
                    </div>

                    <div className="image">
                        <img src="/bikes.jpg" />
                    </div>
                </div>

                <div className="section reverse">
                    <div className="text">
                        <h1>Bike storage</h1>
                        <p>
                            We have some storage space at our building allowing us to store 25 motocycles for winter.
                            We offer a fully climate controlled envroment for your bike to sit in the winter. Its very
                            important to make sure your bike is safly stored during the colder months. We also offer the
                            option to pick up the bike from your place for a extra price.
                        </p>
                        <Link to="/storage"><a className="btn">Book your spot today</a></Link>
                    </div>

                    <div className="image">
                        <img src="/storage.jpg" />
                    </div>
                </div>
            </div>
      </div>
  );
}

export default HomePage;