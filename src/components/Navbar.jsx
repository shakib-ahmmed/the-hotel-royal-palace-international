import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav style={styles.nav}>
            <h2>Hotel Royal Palace</h2>

            <div>
                <Link to="/">Home</Link> |{" "}
                <Link to="/rooms">Rooms</Link> |{" "}
                <Link to="/admin">Admin</Link> |{" "}

                <button onClick={toggleTheme}>
                    {theme === "light" ? "🌙 Dark" : "☀ Light"}
                </button>
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        padding: "15px",
        background: "#1e293b",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
};

export default Navbar;
