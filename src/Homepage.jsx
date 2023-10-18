import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from './api';
import './Homepage.css';

function Homepage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then(setData);
  }, []);

  return (
    <>
      <h1>Vite + JSONdb Template</h1>
      <Link className="action" to="/posts/new">
        Create New Post
      </Link>
      {!data ? (
        'Loading...'
      ) : (
        <section>
          <h2>Recent Posts</h2>
          <ul className="posts">
            {data.map(({ id, title, author }) => (
              <li key={id}>
                <strong>{author}</strong> -
                <Link to={`/posts/${id}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

export default Homepage;
