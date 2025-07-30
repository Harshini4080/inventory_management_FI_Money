# Inventory Management System – Backend API

This project was built as part of the **FI Money Backend Intern assignment**. It provides a secure and clean REST API for managing users and product inventories for a small business.

---

## Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **JWT** for authentication
- **Swagger** for API documentation
- **Postman** for API testing

---

## Features

- ✅ User authentication (login)
- ✅ Add a new product
- ✅ Update product quantity
- ✅ Get paginated list of products
- ✅ JWT-secured routes
- ✅ Swagger API docs at `/api-docs`

---

## Project Structure

├── config/ # MongoDB connection
├── controllers/ # Business logic
├── models/ # Mongoose schemas
├── routes/ # API route definitions
├── middleware/ # JWT authentication middleware
├── swagger/ # Swagger config
├── .env # Environment variables (not committed)
├── .gitignore
├── server.js # Entry point
└── README.md


---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Harshini4080/inventory-backend-FI-Money.git
cd inventory-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add .env File

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

```

### 4. Start the Server

```bash
npm run dev


```
Your API will be live at http://localhost:5000.


## Authentication

After logging in via `POST /api/auth/login`, you'll receive a **JWT token**.
To access protected routes, include this header in every request:
Authorization: Bearer <your_token>


---

## API Endpoints

| Method | Endpoint                           | Description                    | Auth |
|--------|------------------------------------|--------------------------------|------|
| POST   | `/api/auth/register`               | Register a user (test only)    | ❌   |
| POST   | `/api/auth/login`                  | Login and get token            | ❌   |
| POST   | `/api/products`                    | Add a product                  | ✅   |
| PUT    | `/api/products/:id/quantity`       | Update product quantity        | ✅   |
| GET    | `/api/products?page=1&limit=10`    | Get paginated product list     | ✅   |

---

## API Documentation (Swagger)

Interactive Swagger documentation is available at:

 [`https://inventory-backend-fi-money.onrender.com/api-docs/`](http://localhost:5000/api-docs)

You can view all endpoints, try requests, and see expected inputs and responses.

---

## Testing with Postman

A ready-to-import Postman collection is included in this repository:

📁 [`Inventory_API.postman_collection.json`](./Inventory_API.postman_collection.json)

You can import this collection into Postman and start testing the API endpoints directly.

---

## Docker Support
- This project includes a Dockerfile to containerize the backend easily.
- It uses the official Node.js 18 image
- Installs backend dependencies
- Sets up the app inside a container
- Exposes PORT 5000 and starts the server with npm start

  ---
## AI Disclosure
I used AI tools to help build the frontend components, set up API integration with Axios, and improve the UI flow. The code was reviewed and modified based on my understanding.








