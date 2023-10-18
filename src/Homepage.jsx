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
        'Loading...'
      ) : (
        <section>
          <h2>Recent Posts</h2>
          {!posts.length ? (
            <p>No posts yet.</p>
          ) : (
            <ul className="posts">
              {posts.map(({ id, title, author }) => (
                <li key={id}>
                  <strong>{author}</strong> /{' '}
                  <Link to={`/posts/${id}`}>{title}</Link>
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
