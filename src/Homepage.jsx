import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from './Post/api';

function Homepage() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <>
      <h1>Vite + JSONdb Template</h1>
      <Link className="action" to="/posts/new">
        Create New Post
      </Link>
      {!posts ? (
        <div className="loader">Loading...</div>
      ) : (
        <section>
          <h2>Recent Posts</h2>
          {!posts.length ? (
            <p>No posts yet.</p>
          ) : (
            <ul className="posts">
              {posts.map(({ id, title, author, cover }) => (
                <li key={id}>
                  <article className="post-card">
                    <strong>{author}</strong>
                    <Link to={`/posts/${id}`}>
                      <img src={cover} alt={title} height={450} width={800} />
                    </Link>
                    <Link to={`/posts/${id}`}>{title}</Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </>
  );
}

export default Homepage;
