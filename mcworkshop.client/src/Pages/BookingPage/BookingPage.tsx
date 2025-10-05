import "./BookingPage.css"
import BookingForm from "../../Componets/BookingForm/BookingForm";
import BookingCalendar from "../../Componets/BookingCalendar/BookingCalendar";

function BookingPage() {

    return (
        <div className="CalenderDiv">
            <h1>Booking</h1>
            <p>Bullet points of what we offer</p>
            <BookingCalendar />
            <BookingForm />
        </div>
    );

}

export default BookingPage;