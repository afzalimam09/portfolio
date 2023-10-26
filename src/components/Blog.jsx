import { useEffect } from "react";
import { blogs } from "../constants";

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <article className="blog">
            <header>
                <h2 className="h2 article-title">Blog</h2>
            </header>

            <section className="blog-posts">
                <ul className="blog-posts-list">
                    {blogs.map((blog) => (
                        <li className="blog-post-item">
                            <a href="#">
                                <figure className="blog-banner-box">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        loading="lazy"
                                    />
                                </figure>

                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <p className="blog-category">
                                            {blog.category}
                                        </p>

                                        <span className="dot"></span>

                                        <time dateTime="2022-02-23">
                                            {blog.date}
                                        </time>
                                    </div>

                                    <h3 className="h3 blog-item-title">
                                        {blog.title}
                                    </h3>

                                    <p className="blog-text">{blog.desc}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default Blog;
