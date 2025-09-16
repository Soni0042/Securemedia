import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://thesecuremedia.com/blog/wp-json/wp/v2/posts/${id}?_embed`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch post");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-12">Loading post…</p>;
  if (error) return <p className="text-center mt-12 text-red-500">{error}</p>;
  if (!post) return <p className="text-center mt-12">Post not found.</p>;

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 font-sans">
      <Link to="/blog" className="text-red-600 underline mb-4 block">
        ← Back to Blog
      </Link>
      {featuredImage && (
        <img
          src={featuredImage}
          alt={post.title.rendered}
          className="w-full rounded mb-6"
        />
      )}
      <h1
        className="text-4xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      {/* <time
        className="block text-gray-500 mb-6"
        dateTime={post.date}
      >
        {new Date(post.date).toLocaleDateString()}
      </time> */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}
