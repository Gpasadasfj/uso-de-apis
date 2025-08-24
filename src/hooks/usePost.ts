import { useState, useEffect } from "react";
import type { Post } from "../models/Post.model";
import { postFetch } from "../api/PostFetch";

export function usePost() {
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await postFetch();
        setPost(data);
      } catch {
        setError("Error al cargar los posts.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return { post, loading, error };
}
