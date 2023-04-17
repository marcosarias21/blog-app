import { create } from 'zustand';

export const usePostBook = create((set) => ({
  post: [],
  savePost: (newPost) => set((state) => ({ post: [newPost] })),
}));
