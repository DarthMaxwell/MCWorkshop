import { useState } from "react";
import "../Form.css"

function BookingForm() {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [selectedDate, setSelectedDate] = useState<string>("");

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
                  onClick={() => setSelectedDate("")} //clear form too
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

export default BookingForm;