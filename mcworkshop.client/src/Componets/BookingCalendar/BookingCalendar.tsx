import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useState, useEffect } from "react";
import "./BookingCalender.css"
import Spinner from "../Spinner/Spinner";
//import "@fullcalendar/daygrid/main.css";

interface DayAvailability {
    date: Date;
    availability: string;
    bookingCount: number;
}

interface ColoredEvent {
    start: string;
    display: string;
    backgroundColor: string;
}

interface BookingCalendarProps {
    onDateSelect: (date: string) => void;
}

function BookingCalendar({ onDateSelect }: BookingCalendarProps) {
    const [availability, setAvailability] = useState<DayAvailability[] | null>(null);
    const [coloredEvents, setColoredEvents] = useState<ColoredEvent[]>([]);

    useEffect(() => {
        fetch('api/booking/availability')
            .then(res => res.json())
            .then(data => {
                setAvailability(
                    data.map((d: DayAvailability) => ({
                        ...d,
                        date: new Date(d.date) // convert string to Date
                    }))
                );
            });
    }, []);

    useEffect(() => {
        if (availability) {
            setColoredEvents(
                availability.map(d => ({
                    start: d.date.toISOString().split('T')[0],
                    display: 'background',
                    backgroundColor: d.availability
                }))
            );
        }
    }, [availability]);


    const handleDateClick = (info: { dateStr: string; }) => {
        const clicked = coloredEvents.find((e) => e.start === info.dateStr);

        if (clicked?.backgroundColor !== "gray") {
            onDateSelect(info.dateStr);
        }
    };

    return (
        <div className="CalenderDiv">
            {(availability) ? 
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
            :
                <Spinner/>}
        </div>
    );
}

export default BookingCalendar;