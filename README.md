# GameLens  

![GameLens Banner](https://i.ibb.co.com/wF3Mqkms/gamelens-2.png)  

**Live Project:** [GameLens](https://gamelens.netlify.app/)  

## 📌 Overview  
GameLens is a user-friendly Game Review Application that allows users to explore, share, and manage game reviews. With a sleek design, seamless navigation, and responsive functionality, GameLens provides a smooth and engaging user experience.  

---



## 🚀 Key Features  

### 🎮 Game Review Management  
✅ Users can add, update, and delete reviews.  
✅ Reviews include game title, description, rating, genre, and more.  

### 🔑 Authentication  
✅ Email/Password login & Google authentication.  
✅ Private routes for Add Review, My Reviews, and Watchlist.  

### 🎨 Interactive UI Components  
✅ **React Tooltip** - Displays user information on hover.  
✅ **React Simple Typewriter** - Typewriter effect for dynamic headings.  

### ⭐ Game Watchlist  
✅ Add favorite reviews to a personalized Watchlist for quick access.  

### 📊 Sorting & Filtering  
✅ Sort reviews by rating and year.  
✅ Filter reviews by genre (Action, RPG, Adventure, etc.).  

---

## 📄 Core Pages  

- **Home Page** – Dynamic slider/banner, highest-rated games section.  
- **All Reviews Page** – Displays all reviews with sorting & filtering.  
- **Add Review Page (Protected)** – Submit detailed game reviews.  
- **My Reviews Page (Protected)** – View, update, and delete your reviews.  
- **Game Watchlist Page (Protected)** – View your saved games.  
- **Authentication Pages** – Login & Register pages with error handling.  
- **404 Page** – Custom Not Found page with navigation links.  

---

## 🛠️ Technologies Used  
### Frontend  
- **React.js**  
- **Tailwind CSS**  
- **DaisyUI**  

### Backend  
- **Express.js**  
- **MongoDB** (Database)  
- **Firebase Authentication**  

### Deployment  
- **Netlify** (Client)  

---

## 📦 Dependencies  

```json
"dependencies": {
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.0",
  "@mui/material": "^6.2.0",
  "firebase": "^11.0.2",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.0.2",
  "react-simple-typewriter": "^5.0.1",
  "react-toastify": "^10.0.6",
  "react-tooltip": "^5.28.0",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.14.5",
  "swiper": "^11.1.15"
},
"devDependencies": {
  "@vitejs/plugin-react": "^4.3.4",
  "daisyui": "^4.12.14",
  "eslint": "^9.15.0",
  "eslint-plugin-react": "^7.37.2",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.15",
  "vite": "^6.0.1"
}

---

## 🔧 Installation & Setup
Follow these steps to run the project locally:

##1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/gamelens.git
cd gamelens

---
##2️⃣ Install Dependencies

```bash
npm install

---

##3️⃣ Set Up Firebase
Follow these steps:

Create a Firebase project.
Enable Authentication (Email/Password & Google).
Get the Firebase Config and create a .env file:

VITE_FIREBASE_API_KEY=AIzaSyCDX_OmGG28DtrdmC-Fp3rARw1IbYP_Xo4
VITE_FIREBASE_AUTH_DOMAIN=voluntry-1b481.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=voluntry-1b481
VITE_FIREBASE_STORAGE_BUCKET=voluntry-1b481.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=783830556628
VITE_FIREBASE_APP_ID=1:783830556628:web:6f591828757798ca850041

---
##4️⃣ Start the Development Server

```bash
npm run dev


