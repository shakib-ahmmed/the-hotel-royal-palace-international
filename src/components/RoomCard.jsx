import { Link } from "react-router-dom";

function RoomCard({ room }) {
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
                <img src={room.image} alt="Room" />
            </figure>

            <div className="card-body">
                <h2 className="card-title">
                    Room {room.roomNumber}
                </h2>

                <p>Type: {room.type}</p>
                <p>Price: ${room.price}</p>

                <div className="card-actions justify-end">
                    <Link to={`/rooms/${room.id}`}>
                        <button className="btn btn-primary btn-sm">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RoomCard;
