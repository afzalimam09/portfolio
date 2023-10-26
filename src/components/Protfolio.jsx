import { useState, useEffect } from "react";
import { BsGithub, BsChevronDown } from "react-icons/bs";
import { VscLiveShare } from "react-icons/vsc";
import { categories, portfolio } from "../constants";

const Portfolio = () => {
    const [active, setActive] = useState(false);
    const [category, setCategory] = useState("All");
    const [projects, setProjects] = useState(portfolio);

    const handleFilter = (filterItem) => {
        let items;
        if (filterItem === "All") {
            items = portfolio;
        } else {
            items = portfolio.filter((item) => item.category === filterItem);
        }
        setProjects(items);
        setCategory(filterItem);
        setActive((prev) => !prev);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <article className="portfolio">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">
                <ul className="filter-list">
                    {categories.map((item) => (
                        <li key={item.id} className="filter-item">
                            <button
                                onClick={() => handleFilter(item.title)}
                                className={`${
                                    item.title === category ? "active" : ""
                                }`}
                            >
                                {item.title}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="filter-select-box">
                    <button
                        onClick={() => setActive((prev) => !prev)}
                        className={`filter-select ${active ? "active" : ""}`}
                    >
                        <div className="select-value">{category}</div>

                        <div className="select-icon">
                            <BsChevronDown />
                        </div>
                    </button>

                    <ul className="select-list">
                        {categories.map((item) => (
                            <li key={item.id} className="select-item">
                                <button
                                    onClick={() => handleFilter(item.title)}
                                >
                                    {item.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <ul className="project-list">
                    {projects.map((item) => (
                        <li key={item.id} className="project-item active">
                            <div className="project-item-box">
                                <figure className="project-img">
                                    <img
                                        src={item.images[0]}
                                        alt="finance"
                                        loading="lazy"
                                    />
                                </figure>
                                <div className="project-content">
                                    <div className="project-meta">
                                        <p className="project-category">
                                            {item.category}
                                        </p>
                                        <span className="dot"></span>
                                        <span className="date">
                                            {item.date}
                                        </span>
                                    </div>

                                    <h3 className="project-title">
                                        {item.title}
                                    </h3>

                                    <p className="project-desc">{item.desc}</p>

                                    <div className="project-btn-section">
                                        <a
                                            href={`/project/${item.id}`}
                                            className="view-btn"
                                        >
                                            More
                                        </a>
                                        <div className="link">
                                            <a href={item.live}>
                                                <VscLiveShare />
                                            </a>
                                            <a href={item.github}>
                                                <BsGithub />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default Portfolio;
