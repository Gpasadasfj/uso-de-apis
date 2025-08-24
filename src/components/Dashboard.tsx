import { usePost } from "../hooks/usePost";
import { useUsers } from "../hooks/useUsers";
import RenderApi from "./RenderApi";


export default function Dashboard() {
  const { users, loading: loadingUsers, error: errorUsers } = useUsers();
  const { post, loading: loadingPosts, error: errorPosts } = usePost();

  return (
    <>
      <section>
        <RenderApi 
        data={users}
        error={errorUsers}
        loading={loadingUsers}
        type="user" />
      </section>

      <section>
        <RenderApi 
        data={post}
        error={errorPosts}
        loading={loadingPosts}
        type="post" />
      </section>
    </>
  );
}
