import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import ViewPost from './Post/ViewPost.jsx';
import CreatePost from './Post/CreatePost.jsx';
import UpdatePost from './Post/UpdatePost.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/posts/new',
    element: <CreatePost />,
  },
  {
    path: '/posts/:id',
    element: <ViewPost />,
  },
  {
    path: '/posts/:id/edit',
    element: <UpdatePost />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <main>
      <RouterProvider router={router} />
    </main>
    <footer>&copy; 2023 ACME.</footer>
  </>
);
