function AdminDashboard() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">
                Admin Dashboard
            </h1>

            <div className="grid md:grid-cols-3 gap-6">

                <div className="stat bg-base-100 shadow rounded-lg p-4">
                    <div className="stat-title">Total Rooms</div>
                    <div className="stat-value">25</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-lg p-4">
                    <div className="stat-title">Active Bookings</div>
                    <div className="stat-value text-primary">12</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-lg p-4">
                    <div className="stat-title">Occupied Rooms</div>
                    <div className="stat-value text-secondary">8</div>
                </div>

            </div>
        </div>
    );
}

export default AdminDashboard;
