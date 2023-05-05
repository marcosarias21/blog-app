import { create } from 'zustand';

export const usePostBook = create((set) => ({
  postId: null,
  saveId: (newPost) => set(({
    postId: newPost,
  })),
}));
