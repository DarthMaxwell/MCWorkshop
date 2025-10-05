import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useState, useEffect } from "react";
import "./BookingCalender.css"
//import "@fullcalendar/daygrid/main.css";

interface DayAvailability {
    date: Date;
    availability: string;
    bookingCount: number;
}

function BookingCalendar() {
    const [availability, setAvailability] = useState<DayAvailability[]>([]);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const coloredEvents = availability.map(d => ({
        start: d.date.toISOString().split('T')[0],
        display: 'background',
        backgroundColor: d.availability
    }));

    useEffect(() => {
        fetch('api/booking/availability')
            .then(res => res.json())
            .then(data => {
                setAvailability(
                    data.map((d: any) => ({
                        ...d,
                        date: new Date(d.date) // convert string to Date
                    }))
                );
            });
    }, []);


    const handleDateClick = (info: { dateStr: string; }) => {
        const clicked = availability.find((e) => e.date.toISOString().split('T')[0] === info.dateStr);

        if (clicked?.availability !== "gray") {
            setSelectedDate(info.dateStr);
        }

        alert("Clicked: " + info.dateStr);
    };

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
        </div>
    );
}

export default BookingCalendar;