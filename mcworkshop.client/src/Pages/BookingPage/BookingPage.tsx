import "./BookingPage.css"
import BookingForm from "../../Componets/BookingForm/BookingForm";
import BookingCalendar from "../../Componets/BookingCalendar/BookingCalendar";
import { useState } from "react";

function BookingPage() {
    const [selectedDate, setSelectedDate] = useState < string>("")

    return (
        <div className="CalenderDiv">
            <h1>Booking</h1>
            <p>Bullet points of what we offer</p>
            <BookingCalendar onDateSelect={setSelectedDate} />
            <BookingForm selectedDate={selectedDate} clearDate={() => setSelectedDate("")} />
        </div>
    );

}

export default BookingPage;