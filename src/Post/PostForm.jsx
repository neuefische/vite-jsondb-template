import './PostForm.css';

export default function PostForm({ post = {}, onSubmit }) {
  function _onSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    onSubmit(data);
  }

  return (
    <form onSubmit={_onSubmit}>
      <label>
        Title
        <input
          name="title"
          required
          placeholder="Enter the post title"
          defaultValue={post.title}
        />
      </label>
      <label>
        Author
        <input
          name="author"
          required
          placeholder="Enter the post author"
          defaultValue={post.author}
        />
      </label>
      <label>
        Cover
        <input
          name="cover"
          type="url"
          required
          placeholder="Enter the post cover"
          defaultValue={post.cover}
        />
      </label>
      <label>
        Content
        <textarea
          name="content"
          required
          placeholder="Write the post content"
          defaultValue={post.content}
        ></textarea>
      </label>
      <button className="action">Submit</button>
    </form>
  );
}
