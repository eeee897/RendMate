# RentMate 🛠️📦

**RentMate** is a responsive web application that enables users to rent and lend everyday items in a seamless and secure way. The platform supports two user roles — **Renter** and **Lender**, and each user can switch roles anytime.

![User Interface](./public/preview.png)

## 📚 Table of Contents

- [Features](#-features)
  - [Dual Role System](#-dual-role-system)
  - [Platform Pages & User Flow](#️-platform-pages--user-flow)
  - [Protected Routes](#-protected-routes)
- [Tech Stack](#-tech-stack)
- [Future Enhancements](#-future-enhancements)
- [Live Demo](#-live-demo)
- [How to Get Started](#how-to-get-started)
- [License](#license)

## 📌 Features

### 🔄 Dual Role System
Users can act as:
- **Renter**
  - Browse and search listed items.
  - Request rentals and manage payments (currently Cash on Delivery).
  - Track rental history and provide reviews.

- **Lender**
  - List items for rent with detailed descriptions and images.
  - Accept or reject rental requests.
  - Track earnings and feedback from renters.

Users can toggle their role at `/switch-role`.

---

### 🖥️ Platform Pages & User Flow

| Path             | Description |
|------------------|-------------|
| `/`              | Landing page with showcase of popular items. |
| `/login` & `/register` | Required to access platform features. |
| `/account`       | Update profile (username, avatar, password). |
| `/items-feed`    | View, search, filter, and sort rentable items (by name, usage, price). Supports pagination. |
| `/my-items`      | Manage your own listed items (add, edit, delete, disable). Requires lender role. |
| `/status`        | View rental request statuses (pending, accepted, rejected, received). Filter by sent or received requests. |
| `/history`       | View rental history. Users can review past rentals or view requests received from others. |
| `/chats`         | Built-in chatroom to negotiate rental terms with other users. |
| `/need-help`     | Support page for user questions and issue tracking. |

---

### 🔒 Protected Routes

Accessible only when the user is authenticated:
- `/items-feed`
- `/my-items`
- `/status`
- `/history`
- `/chats`
- `/need-help`

---

## ⚙️ Tech Stack

| Layer | Tools |
|-------|-------|
| **Frontend** | React, React Router, Context API |
| **Forms & Validation** | Zod + React Hook Form |
| **UI & Styling** | Tailwind CSS, Lottie Animations, Compound Components |
| **State & Auth** | Context API |
| **Responsiveness** | Mobile-first design |
| **Dark/Light Mode** | Theme support planned |
| **Backend (Planned)** | Supabase for database, authentication, and storage |

---

## 🧪 Future Enhancements

- [ ] Full Supabase backend (auth, real-time DB, storage).
- [ ] Review and rating system improvement.
- [ ] Admin panel for platform moderation.
- [✔️] Dark/Light mode toggle.

---

## 🌐 Live Demo
Check out the live version of RentMate: 

---

## How to Get Started  

1. **Clone the Repository**:
  
   ```bash  
   git clone https://github.com/fisheeesh/rentmate.git  
3. **Install Dependencies**:
   ```bash  
   npm install
4. **Run the App Locally with Vite**:  
   ```bash  
   npm run dev  
5. **Build for Production**:  
   ```bash  
   npm run build
## License
This project is licensed under the [MIT License](LICENSE).