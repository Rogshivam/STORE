# 🛒 E-Commerce App

A full-stack E-Commerce application built with **React**, **Express.js**, **Prisma ORM**, and **PostgreSQL**. The application enables users to browse products, manage their shopping cart, place secure orders, and allows administrators to manage products, categories, users, and orders through an intuitive dashboard.

## 🚀 Features

### Customer Features
- User Authentication (Register/Login)
- Browse Products
- Search & Filter Products
- Product Categories
- Product Details
- Shopping Cart
- Wishlist
- Secure Checkout
- Order Placement
- Order History
- User Profile Management
- Product Reviews & Ratings

### Admin Features
- Admin Dashboard
- Product Management (CRUD)
- Category Management
- Order Management
- User Management
- Inventory Tracking
- Sales Overview

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- Context API / Redux Toolkit

### Backend
- Express.js
- Node.js

### Database
- PostgreSQL
- Prisma ORM

### Authentication
- JWT (JSON Web Token)
- bcrypt

### Image Storage
- Cloudinary

---

## 📁 Project Structure

```
ecommerce-app/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── context/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
│
├── server/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── config/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app
```

### Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000

DATABASE_URL="postgresql://username:password@localhost:5432/ecommerce"

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🗄️ Prisma Setup

Generate the Prisma Client

```bash
npx prisma generate
```

Run Database Migrations

```bash
npx prisma migrate dev
```

(Optional) Open Prisma Studio

```bash
npx prisma studio
```

---

## ▶️ Running the Project

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm start
```

---

## 📌 API Endpoints

### Authentication

```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile
```

### Products

```
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

### Categories

```
GET    /api/categories
POST   /api/categories
PUT    /api/categories/:id
DELETE /api/categories/:id
```

### Cart

```
GET    /api/cart
POST   /api/cart
PUT    /api/cart/:id
DELETE /api/cart/:id
```

### Orders

```
POST   /api/orders
GET    /api/orders
GET    /api/orders/:id
```

---

## 🔒 Security Features

- JWT Authentication
- Password Hashing with bcrypt
- Protected Routes
- Role-Based Authorization
- Input Validation
- Secure REST APIs

---

## 📷 Screenshots

Add screenshots here:

- Home Page
- Product Listing
- Product Details
- Shopping Cart
- Checkout
- Admin Dashboard

---

## 🚀 Future Improvements

- Online Payment Integration (Stripe/Razorpay)
- Coupon & Discount System
- Email Notifications
- Product Recommendations
- Recently Viewed Products
- Dark Mode
- Multi-Vendor Support
- Real-Time Order Tracking

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push the branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Your Name**

- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-profile

---

⭐ If you found this project useful, don't forget to give it a **Star**!
