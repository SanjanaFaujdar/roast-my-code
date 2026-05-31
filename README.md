# 🔥 Roast My Code

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

> **Paste your code. Get brutally honest AI feedback.**

An AI-powered code review tool that gives developers brutally honest, constructive feedback on their code quality, bugs, and bad practices — built with the MERN stack and powered by Groq AI.

---

## 🌐 Live Demo

🔗 [Coming Soon](#)

---

## ✨ Features

- 🤖 **AI-Powered Code Review** — Get detailed feedback on bugs, bad practices, and improvements using Groq AI (Llama 3.3)
- 💻 **Monaco Editor** — The same code editor used in VS Code, right in your browser
- 🌍 **Wall of Shame** — A public community page showing the most hilariously bad code submissions
- 🔐 **User Authentication** — Secure signup/login with JWT tokens and bcrypt password hashing
- 🔗 **Shareable Links** — Every roast gets a unique URL you can share with anyone
- 🌙 **Dark Theme** — Beautiful GitHub-inspired dark UI
- 🚦 **Rate Limiting** — API protection to prevent abuse
- 📱 **Responsive Design** — Works on desktop and mobile

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| React.js | UI Framework |
| Monaco Editor | Code Editor Component |
| React Router v6 | Client-side Routing |
| Axios | HTTP Requests |
| CSS-in-JS | Styling |

### Backend
| Technology | Purpose |
|-----------|---------|
| Node.js | Runtime Environment |
| Express.js | REST API Framework |
| JWT | Authentication Tokens |
| Bcrypt | Password Hashing |
| Nanoid | Unique Slug Generation |
| Express Rate Limit | API Protection |

### Database & AI
| Technology | Purpose |
|-----------|---------|
| MongoDB Atlas | Cloud Database |
| Mongoose | ODM for MongoDB |
| Groq AI | LLM API (Llama 3.3) |

### Deployment
| Technology | Purpose |
|-----------|---------|
| Vercel | Frontend Hosting |
| Railway | Backend Hosting |
| MongoDB Atlas | Database Hosting |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:
- Node.js (v18 or higher)
- npm
- Git

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/SanjanaFaujdar/roast-my-code.git
cd roast-my-code
```

**2. Setup the backend**
```bash
cd server
npm install
```

**3. Setup the frontend**
```bash
cd ../client
npm install
```

**4. Configure environment variables**

Create a `.env` file inside the `server` folder:
```env
MONGO_URI=mongodb://localhost:27017/roastmycode
PORT=5000
GROQ_API_KEY=your_groq_api_key_here
JWT_SECRET=your_jwt_secret_here
```

**5. Run the application**

In one terminal (backend):
```bash
cd server
node index.js
```

In another terminal (frontend):
```bash
cd client
npm start
```

**6. Open your browser**
http://localhost:3000
---

## 🔑 Environment Variables

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `MONGO_URI` | MongoDB connection string | MongoDB Atlas |
| `PORT` | Backend server port | Set to 5000 |
| `GROQ_API_KEY` | Groq AI API key | console.groq.com |
| `JWT_SECRET` | Secret key for JWT tokens | Any random string |

---

## 📡 API Endpoints

### Auth Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login existing user |

### Roast Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/roast` | Submit code for roasting |
| GET | `/api/wall` | Get all public roasts |
| GET | `/api/snippet/:slug` | Get a specific roast by slug |

---

## 📁 Project Structure
roast-my-code/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   └── Navbar.js
│       ├── context/
│       │   └── AuthContext.js
│       ├── pages/
│       │   ├── HomePage.js
│       │   ├── WallPage.js
│       │   ├── SnippetPage.js
│       │   ├── LoginPage.js
│       │   └── RegisterPage.js
│       └── App.js
└── server/                 # Node.js backend
├── middleware/
│   └── auth.js
├── models/
│   ├── Snippet.js
│   └── User.js
├── routes/
│   ├── roast.js
│   └── auth.js
├── db.js
└── index.js


---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 👩‍💻 Author

**Sanjana Faujdar**
- GitHub: [@SanjanaFaujdar](https://github.com/SanjanaFaujdar)

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project helpful, please give it a star!



