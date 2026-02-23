
import React from 'react';

// Example guest data (replace with props or API later)
const guests =    {
        id: 1,
        name: "John Doe",
        room: 101,
        email: "john@example.com",
        checkIn: "2026-02-20",
        checkOut: "2026-02-23"
    },
];

const CheckOut = () => {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Guest Checkout Info</h1>
            {guests.length === 0 ? (
                <p>No guests to show.</p>
            ) : (
                <table border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Room</th>
                            <th>Email</th>
                            <th>Check-In</th>
                            <th>Check-Out</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guests.map((guest) => (
                            <tr key={guest.id}>
                                <td>{guest.name}</td>
                                <td>{guest.room}</td>
                                <td>{guest.email}</td>
                                <td>{guest.checkIn}</td>
                                <td>{guest.checkOut}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CheckOut;import React from 'react';

const CheckOut = () => {
    return (
        <div>

        </div>
    );
};

export default CheckOut;

+ 
+0
++x
+X
+
