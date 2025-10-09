import { useState, type ChangeEvent } from "react";
import "../Form.css"
import type { Booking } from "../../Types/common";

interface BookingFormProps {
    selectedDate: string;
    clearDate: () => void;
}

function BookingForm({ selectedDate, clearDate }: BookingFormProps) {
    const [message, setMessage] = useState("");
    const [validData, setValidData] = useState(false);
    const [formData, setFormData] = useState<Booking>({
        name: "",
        email: "",
        phone: "",
        bike: "",
        km: "",
        details: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            ...formData,
            date: new Date(selectedDate).toISOString().split("T")[0]
        };

        try {
            const res = await fetch("api/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            setMessage("Successfully booked")

            setFormData({
                name: "",
                email: "",
                phone: "",
                bike: "",
                km: "",
                details: "",
            });

            clearDate();

        } catch (err) {
            console.error("Error creating storage:", err);
            setMessage("Failed try again later")
        }
    };

    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        //NEED Data validation
        setValidData(true);
    };

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <h1>Book Appointment</h1>

              <label>
                  Date:
                  <input
                      value={selectedDate ?? ""}
                      readOnly
                      required
                  />
              </label>

              <label>
                  Name:
                  <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                  />
              </label>

              <label>
                  Email:
                  <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                  />
              </label>

              <label>
                  Phone:
                  <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      required
                  />
              </label>

              <label>
                  Bike:
                  <input
                      name="bike"
                      value={formData.bike}
                      onChange={handleChange}
                      placeholder="Bike"
                      required
                  />
              </label>

              <label>
                  Current Km:
                  <input
                      name="km"
                      value={formData.km}
                      onChange={handleChange}
                      placeholder="Km"
                      required
                  />
              </label>

              <label>
                  Details:
                  <input
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Details of service"
                      required
                  />
              </label>

              <button type="submit" disabled={!validData}>Book your spot</button>
              {message && <p>{message}</p>}
          </form>
      </div>
  );
}

export default BookingForm;