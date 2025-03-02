TokenTrack

TokenTrack is a modern Next.js web application that allows users to search, track, and manage their favorite cryptocurrencies in real-time. Users can also view recently viewed cryptocurrencies and dynamically switch between different fiat currencies (USD, EUR, INR, GBP, CHF). The app is designed with a clean UI, optimized for performance and accessibility.

🚀 Features

🔍 Search for top 50 cryptocurrencies (ranked by market cap).

📈 Live price updates in multiple fiat currencies.

⭐ Favorite cryptocurrencies to track easily.

🕒 Recently viewed list for quick access.

🎨 Smooth animations using GSAP.

💾 User preferences stored via Zustand.

📡 Optimized API requests using React Query.

⚡ Fast & scalable with Next.js and TypeScript.

🛠️ Fully responsive design with SCSS & CSS Modules.

📦 Packages Used & Why

1️⃣ Next.js

Framework: Provides server-side rendering, fast performance, and built-in routing.

Why? Next.js is the best choice for SEO-friendly and scalable web applications.

2️⃣ React Query (@tanstack/react-query)

Used for: Managing API calls efficiently with caching and automatic background refetching.

Why? Reduces unnecessary API calls and provides seamless state management for data fetching.

3️⃣ Zustand

Used for: Global state management (handling user preferences like selected currency, favorites, recent views, etc.).

Why? Zustand is lightweight, easy to use, and avoids unnecessary re-renders compared to Redux.

4️⃣ Axios

Used for: Fetching cryptocurrency data from the CoinGecko API.

Why? More powerful than fetch(), supports error handling, interceptors, and automatic retries.

5️⃣ GSAP (GreenSock Animation Platform)

Used for: Animations (initial text reveal, fading in sections smoothly).

Why? GSAP provides performance-optimized animations that work better than CSS-only animations.

6️⃣ SCSS (Sass) & CSS Modules

Used for: Styling components in a modular, maintainable way.

Why? SCSS allows nested styles, variables, and better organization, while CSS Modules ensure style encapsulation.

7️⃣ CoinGecko API

Used for: Fetching real-time cryptocurrency data (prices, market cap, volume, etc.).

Why? Free to use, no API key required, and provides comprehensive crypto data.

8️⃣ Next.js API Routes

Used for: Proxying API requests to bypass CORS issues when fetching crypto data.

Why? Helps prevent client-side errors and improves security.

🔧 Current Implementation

💡 1. User Flow

Users land on the homepage and see an animated introduction (GSAP).

They can search for top cryptocurrencies or browse favorites/recently viewed.

Clicking on a cryptocurrency opens a modal with more details.

Users can switch the currency (USD, EUR, INR, etc.), and all prices update instantly.

Data is cached using React Query for faster performance.

Favorites & recent views are saved using Zustand (local storage support included).

🛠️ 2. Key Components

Header.tsx → Contains logo and currency selector.

SearchCrypto.tsx → Allows searching for crypto assets.

CryptoCard.tsx → Displays cryptocurrency details in a grid.

Favorites.tsx → Lists user's favorite cryptocurrencies.

RecentViewed.tsx → Displays recently viewed crypto assets.

Modal.tsx → Shows detailed information when clicking on a crypto.

🔧 Setup & Installation

1️⃣ Clone the Repository

git clone https://github.com/yourusername/TokenTrack.git
cd TokenTrack

2️⃣ Install Dependencies

npm install # or yarn install

3️⃣ Run the Development Server

npm run dev # or yarn dev

🚀 Open http://localhost:3000 in your browser to view the app.

📜 Future Enhancements

🌍 OAuth Login (Google, GitHub) for better authentication.

📊 Live chart integration for price trends.

🔔 Price Alerts when a crypto reaches a certain threshold.

📱 Mobile-optimized UI with touch-friendly interactions.

🎯 Final Thoughts

TokenTrack is a powerful yet lightweight crypto tracker designed for real-time monitoring, easy navigation, and a smooth UI experience. With advanced caching and animations, it delivers a fast and engaging user experience.

🚀 Made with ❤️ using Next.js, Zustand, React Query & GSAP.
