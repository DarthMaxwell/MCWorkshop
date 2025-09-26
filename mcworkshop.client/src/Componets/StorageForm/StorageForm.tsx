import type { FormEvent, ChangeEvent } from "react";
import { useState } from "react";

function StorageForm() {
    const [message, setMessage] = useState("");
    const [validData, setValidData] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        number: "",
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

            // dosnt update the sapce #

            setMessage("Successfully booked")

            setFormData({
                name: "",
                number: "",
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
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Number"
            />
            <input
                name="plate"
                value={formData.plate}
                onChange={handleChange}
                placeholder="Plate"
            />
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
    );
}

export default StorageForm;
