import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const fetchPosts = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_POINT}/post`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

function Blog() {
  const typing = useRef(null);
  useEffect(() => {
    if (typing.current) {
      const typed = new Typed(typing.current, {
        strings: [
          "Webprowale is a full stack developer",
          "Building responsive interfaces",
          "Optimizing performance",
          "Enhancing online footprint for businesses",
          "Give him a contact today",
        ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });
      return () => typed.destroy();
    }
  }, []);

  const {
    data: posts = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: fetchPosts,
  });

  if (error) {
    return <div>Error fetching posts: {error.message}</div>;
  }

  return (
    <section className="container-fluid mb-5">
      <div className="container">
        <h1 className="primaryColor fw-bold blog-heading">
          Crafting Tomorrow's Web for a Better Experience
        </h1>
        <span ref={typing} className="fw-semibold" />
        <nav
          className="mt-5"
          style={{
            "--bs-breadcrumb-divider":
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E\")",
          }}
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item b small">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active b small" aria-current="page">
              Blog
            </li>
          </ol>
        </nav>
      </div>
      <section className="">
        <div className="row">
          {isLoading && (
            <div className="spinner-border mx-auto mt-5" role="status" style={{marginBottom: '100px'}}>
              <span class="visually-hidden">Loading...</span>
            </div>
          )}
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map((post) => (
              <div className="col-md-4 mb-4 " key={post.id}>
                <div
                  className="card shadow"
                  style={{ backgroundColor: "transparent", minWidth: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.description}</p>
                    <a href={`/blog/${post.id}`} className="btn ">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
           ''
          )}
        </div>
      </section>
    </section>
  );
}

export default Blog;
