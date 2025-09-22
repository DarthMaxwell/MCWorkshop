import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useState, useEffect } from "react";
import "./BookingCalender.css"
//import "@fullcalendar/daygrid/main.css";

interface DayAvailability {
    date: string;
    availability: string;
    bookingCount: number;
}

function BookingCalendar() {
    const [availability, setAvailability] = useState<DayAvailability[]>([]);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: "", email: "" });

    const coloredEvents = availability.map(d => ({
        start: d.date,
        display: 'background',
        backgroundColor: d.availability
    }));

    useEffect(() => {
        fetch('api/booking/availability')
            .then((res) => res.json())
            .then((data) => setAvailability(data));
    }, []);

    const handleDateClick = (info: { dateStr: string; }) => {
        const clicked = availability.find((e) => e.date === info.dateStr);

        if (clicked?.availability !== "gray") {
            setSelectedDate(info.dateStr);
        }

        alert("Clicked: " + info.dateStr);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedDate) return;
    }

    return (
        <div>
            <div className="CalenderDiv">
            <FullCalendar
                key={availability.length}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"   // month view only
                initialDate={new Date()}  // always start at current month
                validRange={{ start: new Date() }} // block past months
                headerToolbar={{
                    start: "",
                    center: "title",
                    end: "prev,next" // keep navigation
                }}
                events={coloredEvents}
                dateClick={handleDateClick}  // handle day clicks
                height="100%"           // fits container height
                contentHeight="100%"
                />
            </div>

            <p>{selectedDate}</p>

            <h2>Book Appointment</h2>
            <form onSubmit={handleSubmit}>
                <label>Date</label>
                <input
                    type="text"
                    value={selectedDate}
                    disabled
                />
                <label>Name</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    required
                />
                <button
                    type="button"
                    onClick={() => setSelectedDate(null)} //clear form too
                >
                    Cancel
                </button>
                <button
                    type="submit"
                >
                    Submit
                </button>

            </form>
        </div>
    );
}

export default BookingCalendar;