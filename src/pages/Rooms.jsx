
import RoomCard from "../components/RoomCard";

function Rooms() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">
                Our Rooms
            </h1>

            <div className="flex flex-wrap gap-6">
                {rooms.map(room => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </div>
        </div>
    );
}

export default Rooms;
