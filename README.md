# 🔗 QuickLink - MERN URL Shortener with QR Code

**QuickLink** is a fast, clean, and modern URL shortener built with the **MERN stack (MongoDB, Express, React, Node)**. It allows users to instantly shorten long URLs, manage URL history locally, and generate downloadable **QR codes** for each short URL.

---

## 🚀 Features

- 🔗 **Shorten URLs** instantly
- 🧾 **URL History** with local browser storage
- 📱 **Downloadable QR Code** for each shortened URL
- 📊 Track the number of clicks per short URL (backend-ready)
- 🎨 **Responsive UI** with modern Tailwind CSS design
- ✅ Validates input URLs before processing
- 🔔 Beautiful **toast notifications**

---

## 📦 Tech Stack

### Frontend
- ⚛️ React (with Vite)
- 💨 Tailwind CSS
- 🌈 Lucide-react Icons
- 🔧 TypeScript or JavaScript support

### Backend
- 🟢 Node.js
- ⚙️ Express.js
- 🍃 MongoDB (via Mongoose)
- ✉️ dotenv for environment config

---

## 🧪 API Endpoints

| Method | Endpoint          | Description                     |
|--------|-------------------|---------------------------------|
| POST   | `/api/v1/shorten` | Create a new short URL          |
| GET    | `/:urlCode`       | Redirect to the original URL    |

---
## Demo Link
https://quick-link-eight.vercel.app/

---
## 🛠️ Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/abhishekrajput1235/quicklink.git
cd quicklink
