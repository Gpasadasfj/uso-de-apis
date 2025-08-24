import type { RenderApiProps } from "../models/RenderApiProps.model";
import UserList from "./UserList";
import PostList from "./PostList";

export default function RenderApi({
  data,
  error,
  loading,
  type,
}: RenderApiProps) {
  return (
    <section>
      {loading && <p>Cargando {type === "user" ? "usuarios" : "posts"}...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && type === "user" && <UserList users={data} />}
      {!loading && !error && type === "post" && <PostList postList={data} />}
    </section>
  );
}
