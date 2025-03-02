import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserPreferences {
  username: string;
  favorites: string[];
  recentViewed: string[];
}

interface UserStore {
  users: Record<string, UserPreferences>; // Store preferences for multiple users
  currentUser: string | null;
  setUser: (username: string) => void;
  addFavorite: (crypto: string) => void;
  addRecentView: (crypto: string) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, get) => ({
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
                favorites: user.favorites.includes(crypto)
                  ? user.favorites.filter((fav) => fav !== crypto) // Remove if exists
                  : [...user.favorites, crypto], // Add if new
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
                recentViewed: [crypto, ...user.recentViewed.slice(0, 9)], // Max 10 recent views
              },
            },
          };
        }),
    }),
    { name: "user-preferences" } // Saves to localStorage
  )
);
