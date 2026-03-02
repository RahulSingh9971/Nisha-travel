// src/config/apiConfig.js

// 1. Key ko ek variable mein lein aur default value (fallback) dein
const API_KEY = process.env.REACT_APP_API_KEY || "7802a1979d7472728fe22f93ccaf375";

export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_BASE_URL || "https://cms.nisatravels.com/api",
  API_KEY: API_KEY,
  HEADERS: {
    "X-API-Key": String(API_KEY), // String() use karne se undefined ka risk khatam ho jata hai
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
};