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

const readFromStorage = (): SavedPost[] => {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw) as SavedPost[];
  } catch {
    return [];
  }
};

// Module-level shared store — guarantees every hook instance sees the same posts,
// even if localStorage write fails (quota exceeded). This was the source of the
// "stops at 7 posts" bug: failed writes meant other hook instances kept reading
// stale data from localStorage.
let memoryStore: SavedPost[] = readFromStorage();

const broadcast = () => window.dispatchEvent(new Event(EVT));

const writeStore = (next: SavedPost[]) => {
  memoryStore = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch (e) {
    console.warn("Could not persist posts to localStorage (likely quota). Keeping in memory.", e);
  }
  broadcast();
};

export const usePosts = () => {
  const [posts, setPosts] = useState<SavedPost[]>(memoryStore);

  useEffect(() => {
    const handler = () => setPosts([...memoryStore]);
    window.addEventListener(EVT, handler);
    window.addEventListener("storage", () => {
      memoryStore = readFromStorage();
      handler();
    });
    return () => {
      window.removeEventListener(EVT, handler);
    };
  }, []);

  const addPost = useCallback((p: Omit<SavedPost, "id" | "createdAt">) => {
    const post: SavedPost = {
      ...p,
      id: `post-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      createdAt: Date.now(),
    };
    writeStore([post, ...memoryStore]);
    return post;
  }, []);

  const removePost = useCallback((id: string) => {
    writeStore(memoryStore.filter((p) => p.id !== id));
  }, []);

  const clearAll = useCallback(() => writeStore([]), []);

  return { posts, addPost, removePost, clearAll };
};
