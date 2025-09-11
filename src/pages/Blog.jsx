import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://thesecuremedia.com/blog/wp-json/wp/v2/posts?_embed")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-12 text-gray-500">Loading posts...</p>;
  }

  if (error) {
    return (
      <p className="text-center mt-12 text-red-500">
        Error loading posts: {error}
      </p>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 font-sans">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">
        Blog
      </h1>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No blog posts found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const featuredImage =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <article className="overflow-hidden shadow-lg rounded-2xl bg-white flex flex-col h-full">
                  {featuredImage && (
                    <img
                      src={featuredImage}
                      alt={post.title.rendered}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2
                      className="text-2xl font-semibold mb-2 text-gray-900"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div
                      className="text-gray-600 mb-4 flex-grow"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                      {post.yoast_head_json?.author && (
                        <span>By {post.yoast_head_json.author}</span>
                      )}
                    </div>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-blue-600 text-white text-center font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}
