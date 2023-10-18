import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPost } from '../api';
import { useParams } from 'react-router-dom';

export default function ViewPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id).then(setPost);
  }, [id]);

  if (!post) {
    return 'Loading...';
  }

  const { title, author, content } = post;

  return (
    <>
      <nav>
        <Link to="/">Back to the Homepage</Link>
        <Link to={`/posts/${id}/edit`}>Edit Post</Link>
      </nav>
      <article>
        <h1>{title}</h1>
        <p>
          written by <strong>{author}</strong>
        </p>
        <p>{content}</p>
      </article>
    </>
  );
}
