# **🎟️ Events Platform – Find & Manage Events**  

🚀 **Live Demo:** [Events Platform](https://events-platform-gules.vercel.app/)  

---

## **📌 Overview**
The **Events Platform** allows users to:
- Find **live events** from **Ticketmaster** 🎭
- **Sign up** for events 📩
- **Staff can create** custom events for the community 📆
- **Google Calendar Integration** to add events easily ✅

---

## **🛠️ Features**
✅ **Public Users**  
- Browse upcoming events  
- Sign up for events using an **email address**  
- View signed-up events on **My Events** page  

✅ **Staff Users**  
- **Sign in with any Gmail account** to access the Staff Dashboard 
  I have created one for testing purposes: 
  Email: ncstafftest@gmail.com
  Password: Northcoders123
- Create new events **(custom events are stored in Firebase)**  
- Manage events (create & delete)  

✅ **My Events (Test Account)**  
- To see a list of signed-up events, sign in using:  
  ```
  Email: ncstafftest@gmail.com
  ```

✅ **Firebase Authentication**  
- Google Sign-In for **Staff Dashboard Access**  

✅ **Deployed on Vercel**  
- Production URL: **[https://events-platform-gules.vercel.app/](https://events-platform-gules.vercel.app/)**  

---

## **📜 How to Use**
### **1️⃣ Find & Sign Up for Events**
1. Visit the [Events Platform](https://events-platform-gules.vercel.app/)  
2. Enter a city (e.g., "New York") and click **Search**  
3. Click **Sign Up for Event** to register  
4. View your signed-up events in **My Events**  

### **2️⃣ Staff: Create & Manage Events**
1. Go to **[Sign In](https://events-platform-gules.vercel.app/signin)**  
2. Use **any Gmail account** to sign in  
3. In the **Staff Dashboard**, enter event details & click **Create Event**  
4. Events appear on the homepage for users to sign up  

### **3️⃣ View Signed-Up Events**
- Click on **"My Events"**  
- Use **"test@gmail.com"** to see demo events  

---

## **📷 Screenshots**
### 🎟️ Event List  
![Event List](https://via.placeholder.com/600x300)  

### 📅 My Events  
![My Events](https://via.placeholder.com/600x300)  

### 🏢 Staff Dashboard  
![Staff Dashboard](https://via.placeholder.com/600x300)  

---

## **📦 Tech Stack**
🔹 **Frontend:** React, Firebase Authentication  
🔹 **Backend:** Firebase Firestore (Database)  
🔹 **API Integration:** Ticketmaster Events API  
🔹 **Hosting:** Vercel (Frontend), Firebase (Database)  

---

## **🛠️ Setup Locally**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/events-platform.git
cd events-platform
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Add `.env` File**
Create a `.env` file in the root and add:
```sh
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-id
REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
REACT_APP_TICKETMASTER_API_KEY=your-ticketmaster-api-key
```

### **4️⃣ Start the App**
```sh
npm start
```
App runs at **`http://localhost:3000`**  

---


## **📩 Contact**
For issues or suggestions, open a GitHub issue or reach out at **mhussain2002@icloud.com**.  

---

### 🎉 **Enjoy Managing & Finding Events!**