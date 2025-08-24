import type { PostListProps, Post } from "../models/Post.model";

export default function PostList({ postList }: PostListProps) {
  return (
    <>
      <h1>Lista de posts</h1>
      <ul>
        {postList.map((post: Post) => (
          <li key={post.id}>
            <p>
              <span style={{ fontWeight: "bold" }}>Título:</span> {post.title}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Contenido: </span> {post.body}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
