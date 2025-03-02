import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Crypto } from "@/types/Crypto";

// Define the User Preferences type
interface UserPreferences {
  username: string;
  favorites: Crypto[];
  recentViewed: Crypto[];
}

// Define Zustand store
interface UserStore {
  users: Record<string, UserPreferences>; // Store preferences per user
  currentUser: string | null;
  setUser: (username: string) => void;
  addFavorite: (crypto: Crypto) => void;
  addRecentView: (crypto: Crypto) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      users: {}, // No users initially
      currentUser: null,

      setUser: (username) =>
        set((state) => ({
          currentUser: username,
          users: {
            ...state.users,
            [username]: state.users[username] || {
              username,
              favorites: [],
              recentViewed: [],
            },
          },
        })),

      addFavorite: (crypto) =>
        set((state) => {
          const currentUser = state.currentUser;
          if (!currentUser) return state;
          const user = state.users[currentUser];

          return {
            users: {
              ...state.users,
              [currentUser]: {
                ...user,
                favorites: user.favorites.some((fav) => fav.id === crypto.id)
                  ? user.favorites.filter((fav) => fav.id !== crypto.id) // Remove if exists
                  : [...user.favorites, crypto], // Add if new
              },
            },
          };
        }),

      removeFavorite: (id) =>
        set((state) => {
          const currentUser = state.currentUser;
          if (!currentUser) return state;
          const user = state.users[currentUser];

          return {
            users: {
              ...state.users,
              [currentUser]: {
                ...user,
                favorites: user.favorites.filter((fav) => fav.id !== id), // Remove by ID
              },
            },
          };
        }),

      addRecentView: (crypto) =>
        set((state) => {
          const currentUser = state.currentUser;
          if (!currentUser) return state;
          const user = state.users[currentUser];

          return {
            users: {
              ...state.users,
              [currentUser]: {
                ...user,
                recentViewed: [
                  crypto,
                  ...user.recentViewed.filter((item) => item.id !== crypto.id),
                ].slice(0, 10), // Keep only last 10
              },
            },
          };
        }),
    }),
    { name: "user-preferences" } // Persist user data to localStorage
  )
);
