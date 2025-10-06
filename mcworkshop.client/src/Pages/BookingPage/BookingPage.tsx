import "./BookingPage.css"
import BookingForm from "../../Componets/BookingForm/BookingForm";
import BookingCalendar from "../../Componets/BookingCalendar/BookingCalendar";
import { useState } from "react";

function BookingPage() {
    const [selectedDate, setSelectedDate] = useState < string | null>(null)

    return (
        <div className="CalenderDiv">
            <h1>Booking</h1>
            <p>Bullet points of what we offer</p>
            <BookingCalendar onDateSelect={setSelectedDate} />
            <BookingForm selectedDate={selectedDate} />
        </div>
    );

}

export default BookingPage;