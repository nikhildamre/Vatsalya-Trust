# 🤝 Vatsalya Trust – NGO Management App

A mobile application built for Vatsalya Trust to streamline NGO operations like appointment scheduling, volunteer and beneficiary management, donation tracking, and event updates. Developed using **React Native**, **Firebase**, and modern development practices to ensure scalability and real-time performance.

---

## ✨ Features

- 📅 **Appointment Scheduling** – Book and manage sessions with therapists or NGO coordinators.
- 📰 **Event & News Updates** – Share important announcements and events within the community.
- 💸 **Donation Handling** – Secure donation flow with logs and transaction management.
- 🙋 **Volunteer & Beneficiary Registration** – Simple forms for both volunteers and those seeking help.
- 🔐 **Secure Authentication** – Role-based login using Firebase Auth.
- ☁️ **Firebase Backend** – Real-time database and storage integration.

---

## 🛠 Tech Stack

| Technology        | Description                          |
|-------------------|--------------------------------------|
| React Native      | Cross-platform mobile development    |
| Firebase Auth     | Secure user authentication           |
| Firestore DB      | Real-time cloud database             |
| Firebase Storage  | Media & document uploads             |
| Node.js (Optional)| Backend support for extended logic   |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nikhildamre/vatdsalyatrust-main.git
cd vatdsalyatrust-main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Firebase

- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new Firebase project
- Enable the following:
  - **Authentication** → Email/Password
  - **Cloud Firestore**
  - **Storage**

- Replace the Firebase configuration in `services/firebase.js` with your own:

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_MSG_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

> ⚠️ **Important:** Add `firebase.js` to your `.gitignore` if it contains secret keys.

### 4. Start the Project

```bash
npm start
```

---

## 🤝 Contributing

We welcome contributions! 🚀  
If you have suggestions for improvements or want to fix bugs, feel free to fork and create a pull request.

### Contribution Steps

1. **Fork** the repository  
2. **Create** your feature branch  
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Commit** your changes  
   ```bash
   git commit -m "Add Your Feature"
   ```
4. **Push** the branch  
   ```bash
   git push origin feature/YourFeature
   ```
5. **Open a Pull Request** 🚀

---

## 📬 Contact

Made with ❤️ by **Nikhil Damre**

- 📧 Email: `nikhildamre.dev@gmail.com`  
- 🌐 LinkedIn: [linkedin.com/in/nikhildamre](https://linkedin.com/in/nikhildamre)  
- 💻 GitHub: [github.com/nikhildamre](https://github.com/nikhildamre)

---


#
