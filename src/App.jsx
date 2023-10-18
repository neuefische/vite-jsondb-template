import { useState, useEffect } from 'react';
import './App.css';

const getPosts = () => fetch('/api/posts').then((response) => response.json());

const createPost = (data) =>
  fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then(setData);
  }, []);

  async function onClick() {
    await createPost({ title: 'new post', author: 'caetano veloso' });
    getPosts().then(setData);
  }

  return (
    <>
      <h1>JSON API example</h1>
      {!data ? (
        'Loading...'
      ) : (
        <pre>
          <code>{JSON.stringify(data, null, 2, 2)}</code>
        </pre>
      )}
      <button onClick={onClick}>Create new post</button>
    </>
  );
}

export default App;
