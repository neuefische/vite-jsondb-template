import { Link } from 'react-router-dom';
import { createPost } from '../api';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

export default function CreatePost() {
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      await createPost(data);
      navigate('/');
    } catch (error) {
      console.log(error);
      alert('Error creating post');
    }
  }

  return (
    <>
      <nav>
        <Link to="/">Back to the Homepage</Link>
      </nav>
      <h1>Create Post</h1>
      <Form onSubmit={onSubmit} />
    </>
  );
}
