import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPost, updatePost, deletePost } from './api';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from './PostForm';

export default function UpdatePost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id).then(setPost);
  }, [id]);

  if (!post) {
    return 'Loading...';
  }

  async function onSubmit(data) {
    try {
      await updatePost(id, data);
      navigate('/');
    } catch (error) {
      console.log(error);
      alert('Error editing post');
    }
  }

  async function onDelete() {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    try {
      await deletePost(id);
      navigate('/');
    } catch (error) {
      console.log(error);
      alert('Error deleting post');
    }
  }

  return (
    <>
      <nav>
        <Link to="/">Back to the Homepage</Link>
      </nav>
      <h1>Edit Post</h1>
      <PostForm post={post} onSubmit={onSubmit} />
      <button className="action" onClick={onDelete}>
        Delete Post
      </button>
    </>
  );
}
