import { useEffect, useState } from 'react';
import "./BookingPage.css"
import BookingCalendar from '../../Componets/BookingCalendar';

interface Booking {
    email: string;
    phone: string;
    bike: string;
    date: Date;
}

function BookingPage() {
    const [appointments, setAppointments] = useState<Booking[]>();

    useEffect(() => {
        populateAppointmentData();
    }, []);

    const contents = appointments === undefined
        ? <p>Loading... Please refresh once the ASP.NET backend has started.</p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Bike</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(a =>
                    <tr key={a.email}>
                        <td>{a.email}</td>
                        <td>{a.phone}</td>
                        <td>{a.bike}</td>
                    </tr>
                )}
            </tbody>
        </table>;

  return (
      <div>
          <h1 id="tableLabel">Bookings</h1>
          <BookingCalendar />
          <p>Current Bookings</p>
          {contents}
      </div>
    );

    async function populateAppointmentData() {
        const response = await fetch('booking')
        if (response.ok) {
            const data = await response.json();
            setAppointments(data);
        }
    }
}

export default BookingPage;