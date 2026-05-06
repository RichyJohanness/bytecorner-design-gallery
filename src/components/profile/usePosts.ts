import { useEffect, useState, useCallback } from "react";

export type SavedPost = {
  id: string;
  designKey: string;
  designLabel: string;
  images: string[]; // dataURLs, 1 = single, >1 = carousel
  caption?: string;
  createdAt: number;
};

const KEY = "bytecorner.posts";
const EVT = "bytecorner-posts-change";

const read = (): SavedPost[] => {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw) as SavedPost[];
  } catch {
    return [];
  }
};

export const usePosts = () => {
  const [posts, setPosts] = useState<SavedPost[]>(read);

  useEffect(() => {
    const handler = () => setPosts(read());
    window.addEventListener(EVT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(EVT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const persist = (next: SavedPost[]) => {
    setPosts(next);
    let saved = false;
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
      saved = true;
    } catch (e) {
      // Quota exceeded — keep in-memory state so the UI still shows the post
      console.warn("Could not persist posts to localStorage (likely quota). Keeping in memory.", e);
    }
    // Only broadcast if we actually wrote, otherwise other hook instances would re-read stale data
    if (saved) window.dispatchEvent(new Event(EVT));
  };

  const addPost = useCallback((p: Omit<SavedPost, "id" | "createdAt">) => {
    const post: SavedPost = {
      ...p,
      id: `post-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      createdAt: Date.now(),
    };
    persist([post, ...read()]);
    return post;
  }, []);

  const removePost = useCallback((id: string) => {
    persist(read().filter((p) => p.id !== id));
  }, []);

  const clearAll = useCallback(() => persist([]), []);

  return { posts, addPost, removePost, clearAll };
};
