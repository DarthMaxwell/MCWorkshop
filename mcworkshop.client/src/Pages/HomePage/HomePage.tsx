import { Link } from "react-router";
import "./HomePage.css"

function HomePage() {
    return (
        <div className="HomePage">
            <h1>Motocycle Worshop</h1>
            <p>Little about us thing. Love of bikes bla bla bla</p>

            <p>full page banner picture showing happy customers and all the diffrenet bikes we have worked on</p>

            <p>Google maps api for location along with an address</p>

            <div className="OtherPages">
                <div className="section">
                    <div className="text">
                        <h1>Book an appointment</h1>
                        <p>
                            We service all types of bikes and rebuild or replace damanged bikes.
                            We follow your bikes standards with our experiance to give you a service
                            your happy with. Some services take longer than others but most our services we can do in a day.
                        </p>
                        <Link to="/booking"><a className="btn">Book you appointment here</a></Link>
                    </div>
                    
                    <div className="image">
                        <img src="/booking.jpg" />
                    </div>
                </div>

                <div className="section reverse">
                    <div className="text">
                        <h1>Check out our current inventory of parts</h1>
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
                            We love working on bikes so during off season or when we find good deals we buy bikes
                            and rebuild them to the highest standard to resell. We enjoy fixing these bikes and
                            giving them a second chance on the road.
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
                            imports to make sure your bike is safly stored during the colder months. We also offer the
                            option to pick up the bike from your place and take it to our place.
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