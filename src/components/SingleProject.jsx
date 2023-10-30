import { BiArrowBack } from "react-icons/bi";
import { techStacks } from "../constants";

const SingleProject = ({ activeProject, setActiveProject }) => {
    return (
        <article className="single">
            <header>
                <button
                    onClick={() => setActiveProject(null)}
                    className="h2 article-title"
                >
                    <BiArrowBack />
                </button>
            </header>
            <section>
                <h3 className="h3">{activeProject.title}</h3>

                <ul className="testimonials-list has-scrollbar">
                    {activeProject.images.map((item, index) => (
                        <li key={index} className="testimonials-item">
                            <img
                                src={item}
                                alt={activeProject.title}
                                className="project-img"
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <section className="desc">
                <p>
                    I'm Full Stack Web Developer from Bhubaneshwar, India,
                    completed B-Tech in Computer Science from KIST College,
                    Bhubaneshwar Odisha in 2023.
                </p>
                <p>
                    In addition to my technical skills, I possess excellent
                    communication skills and enjoy working collaboratively with
                    others to achieve common goals. I am highly motivated,
                    detail-oriented, and possess a strong work ethic.
                </p>
            </section>
            <section>
                <h4 className="h4">Tech Stacks</h4>
                <div className="techstack-icon-list">
                    {techStacks.map((item) => (
                        <div key={item.url}>
                            <img
                                className="tech-icon"
                                src={item.url}
                                height={50}
                                width={50}
                                alt={item.title}
                            />
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h4 className="h4">Deployed Links</h4>
                <div className="deployed-links">
                    <a href="/git">Github</a>
                    <a href="/live">Live Demo</a>
                    <a href="/api">API Documentation</a>
                </div>
            </section>
        </article>
    );
};

export default SingleProject;
