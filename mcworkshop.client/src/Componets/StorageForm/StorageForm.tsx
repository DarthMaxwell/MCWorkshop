import type { FormEvent, ChangeEvent } from "react";
import { useState } from "react";
import "./StorageForm.css"
import "../Form.css"
import type {Storage } from "../../Types/common"

function StorageForm() {
    const [message, setMessage] = useState("");
    const [validData, setValidData] = useState(false);
    const [formData, setFormData] = useState<Storage>({
        name: "",
        phone: "",
        plate: "",
        pickup: false
    });

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("api/storage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            // dosnt update the sapce # can use props

            setMessage("Successfully booked")

            setFormData({
                name: "",
                phone: "",
                plate: "",
                pickup: false
            });

        } catch (err) {
            console.error("Error creating storage:", err);
            setMessage("Failed try again later")
        }
    };

    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));

        checkData();
    }

    function checkData() {
        // datavalidation with those strings that can check the format of a string
        setValidData(true);
    }

    return (
        <div className="FormDiv">
            <form onSubmit={handleSubmit}>
                <h1>Book your spot</h1>
                <label>
                    Name:
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                </label>

                <label>
                    Phonenumber:
                    <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phonenumber"
                    />
                </label>

                <label>
                    Plate:
                    <input
                        name="plate"
                        value={formData.plate}
                        onChange={handleChange}
                        placeholder="Plate"
                    />
                </label>

                <label>
                    Pickup:
                    <input
                        type="checkbox"
                        name="pickup"
                        checked={formData.pickup}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit" disabled={!validData}>Book your spot</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}

export default StorageForm;
