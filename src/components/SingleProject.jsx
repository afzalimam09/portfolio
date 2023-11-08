import { BiArrowBack } from "react-icons/bi";
import { techStacks } from "../constants";
import { useEffect } from "react";

const SingleProject = ({ activeProject, setActiveProject }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <article className="single">
            <header>
                <button
                    onClick={() => setActiveProject(null)}
                    className="h2 article-title"
                >
                    <BiArrowBack />
                </button>
                <h3 className="h3">{activeProject.name}</h3>
            </header>
            <section>
                <h3 className="h3">{activeProject.title}</h3>
                <ul className="testimonials-list has-scrollbar">
                    {activeProject.images.map((item, index) => (
                        <li key={index} className="testimonials-item">
                            <figure className="project-img">
                                <img src={item} alt={activeProject.title} />
                            </figure>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="desc">
                <p>{activeProject.firstPara}</p>
                <h4 className="h4">Key Features</h4>
                {activeProject.features.map((item) => (
                    <p key={item.id}>
                        <b>{item.title}:</b> {item.desc}
                    </p>
                ))}
                <p>{activeProject.lastPara}</p>
                {/* <p>{`This project was completed on ${activeProject.date}`}</p> */}
            </section>
            <section>
                <h4 className="h4">Tech Stacks</h4>
                <div className="techstack-list">
                    {activeProject.techstacks.map((item, index) => (
                        <p className="techstack" key={index}>
                            {item}
                        </p>
                    ))}
                </div>
            </section>
            <section>
                <h4 className="h4">Deployed Links</h4>
                <div className="deployed-links">
                    {activeProject.github && (
                        <a href={activeProject.github} target="_blank">
                            Github
                        </a>
                    )}
                    {activeProject.live && (
                        <a href={activeProject.live} target="_blank">
                            Live Demo
                        </a>
                    )}
                    {activeProject.api && (
                        <a href={activeProject.api} target="_blank">
                            API Documentation
                        </a>
                    )}
                </div>
            </section>
        </article>
    );
};

export default SingleProject;
