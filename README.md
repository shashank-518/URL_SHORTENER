# 🔗 URL Shortener

A simple and modern **URL Shortener** built using **Node.js**, **Express**, **MongoDB**, and **EJS**.  
It allows users to generate short, shareable links and view analytics like total clicks for each URL.

---

## 🚀 Live Demo
👉 **Hosted on Vercel:** [https://url-shortener-1-enhs.onrender.com/]
---

## 🖼️ Preview

### 🔹 Home Page
![URL Shortener Home Page](./screenshots/home.png)

### 🔹 Generated Short Link & Analytics
![Short Link and Analytics](./screenshots/analytics.png)

---

## ⚙️ Features
✅ Shorten long URLs into tiny links  
✅ Redirect instantly using short IDs  
✅ Track click count for each URL  
✅ Beautiful, responsive UI  
✅ Simple setup — no authentication required  
✅ Deployed easily on Vercel or Render  

---

## 🧩 Tech Stack
| Layer | Technology |
|-------|-------------|
| Frontend | EJS + CSS |
| Backend | Node.js + Express |
| Database | MongoDB (Mongoose) |
| Hosting | Vercel / Render |

---

## 📁 Folder Structure

URLSHORTNER/
│
├── Controllers/
│ └── url.js
│
├── Models/
│ └── url.js
│
├── routes/
│ ├── StaticRoutes.js
│ └── Urlroutes.js
│
├── views/
│ └── home.ejs
│
├── .env
├── .gitignore
├── index.js
├── Connection.js
├── package.json
└── README.md



---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener


npm install


MONGO_URL=your_mongodb_connection_string
PORT=8000



node index.js



