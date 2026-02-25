import React, { useState } from "react";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
        roomType: "standard",
        requests: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email || !formData.checkIn || !formData.checkOut) {
            alert("Please fill all required fields.");
            return;
        }

        console.log("Booking Submitted:", formData);
        alert("Booking Successful!");
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Hotel Booking Form</h2>
            <form onSubmit={handleSubmit} style={styles.form}>

                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    style={styles.input}
                />

                <div style={styles.row}>
                    <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        style={styles.input}
                    />

                    <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>

                <div style={styles.row}>
                    <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        style={styles.input}
                    >
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                                {num} Guest{num > 1 && "s"}
                            </option>
                        ))}
                    </select>

                    <select
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                        style={styles.input}
                    >
                        <option value="standard">Standard Room</option>
                        <option value="deluxe">Deluxe Room</option>
                        <option value="suite">Suite</option>
                    </select>
                </div>

                <textarea
                    name="requests"
                    placeholder="Special Requests"
                    value={formData.requests}
                    onChange={handleChange}
                    style={{ ...styles.input, height: "80px" }}
                />

                <button type="submit" style={styles.button}>
                    Book Now
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    input: {
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "100%",
    },
    row: {
        display: "flex",
        gap: "10px",
    },
    button: {
        padding: "12px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#007bff",
        color: "#fff",
        cursor: "pointer",
        fontWeight: "bold",
    },
};

export default BookingForm;