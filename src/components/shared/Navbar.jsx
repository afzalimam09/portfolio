import { navLinks } from "../../constants";

const Navbar = ({ setComponent, component, setActiveProject }) => {
    const handleNavClick = (title) => {
        setActiveProject((prev) => {
            if (!prev) setActiveProject(null);
        });
        setComponent(title);
    };
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navLinks.map(({ id, title }) => (
                    <li key={id} className="navbar-item">
                        <button
                            onClick={() => handleNavClick(title)}
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
