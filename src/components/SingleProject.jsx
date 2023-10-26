const SingleProject = ({ activeProject, setActiveProject }) => {
    return (
        <article className="blog">
            <header>
                <button
                    onClick={() => setActiveProject(null)}
                    className="h2 article-title"
                >
                    {"<--"}
                </button>
            </header>

            <section className="blog-posts" style={{ color: "white" }}>
                Project Detail Page is under Construction
            </section>
        </article>
    );
};

export default SingleProject;
