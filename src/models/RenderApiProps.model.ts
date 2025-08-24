import type { Post } from "./Post.model";
import type { User } from "./User.model";

export type RenderApiProps =
  | {
      type: "user";
      data: User[];
      error: string | null;
      loading: boolean;
    }
  | {
      type: "post";
      data: Post[];
      error: string | null;
      loading: boolean;
    };
