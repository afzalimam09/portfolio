import { navLinks } from "../../constants";

const Navbar = ({ setComponent, component }) => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navLinks.map(({ id, title }) => (
                    <li key={id} className="navbar-item">
                        <button
                            onClick={() => setComponent(title)}
                            className={`navbar-link ${
                                component === title ? "active" : ""
                            }`}
                        >
                            {title}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
