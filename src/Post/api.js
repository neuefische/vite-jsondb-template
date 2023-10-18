export const getPosts = () =>
  fetch('/api/posts').then((response) => response.json());

export const getPost = (id) =>
  fetch(`/api/posts/${id}`).then((response) => response.json());

export const createPost = (data) =>
  fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

export const updatePost = (id, data) =>
  fetch(`/api/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

export const deletePost = (id) =>
  fetch(`/api/posts/${id}`, { method: 'DELETE' });
