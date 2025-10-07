import { useState } from "react";
import "../Form.css"
import type { Booking } from "../../Types/common";

interface BookingFormProps {
    selectedDate: string | null;
}

function BookingForm({ selectedDate }: BookingFormProps) {
    const [formData, setFormData] = useState<Booking>({
        Name: "",
        Email: "",
        Phone: "",
        Bike: "",
        Km: "",
        Details: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedDate) return;
    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <h1>Book Appointment</h1>
              <label>Date</label>
              <input
                  type="text"
                  value={selectedDate ?? ""}
                  readOnly
              />

              <label>Name</label>
              <input
                  type="text"
                  value={formData.Name}
                  onChange={(e) =>
                      setFormData({ ...formData, Name: e.target.value })
                  }
                  required
              />

              <label>Email</label>
              <input
                  type="email"
                  value={formData?.Email}
                  onChange={(e) =>
                      setFormData({ ...formData, Email: e.target.value })
                  }
                  required
              />

              <button type="submit">
                  Submit
              </button>

          </form>
      </div>
  );
}

export default BookingForm;