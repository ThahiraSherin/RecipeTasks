URL for published documentation
https://documenter.getpostman.com/view/45894497/2sB34oDHpt

# 🍽️ RecipeTasks

A complete CRUD (Create, Read, Update, Delete) **Recipe Management API** built using **Node.js**, **Express.js**, and **MongoDB (Mongoose)**. This project follows the **MVC architectural pattern** and is tested via **Postman**.

---

## 📌 Features

- ➕ Create a new recipe
- 📄 Retrieve all recipes
- 🔍 Retrieve a single recipe by ID
- ✏️ Update a recipe's information
- ❌ Delete a recipe
- 🔁 Follows MVC pattern
- ⚙️ RESTful API using Express.js
- 📦 MongoDB database connection using Mongoose
- 📬 API tested with Postman (sample collection provided)

---

## 🧱 Tech Stack

- **Node.js** – Backend runtime environment
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM to interact with MongoDB
- **Postman** – For API testing

---

## 📁 Project Structure

RecipeTasks/
├── controllers/
│ └── recipeController.js # All controller logic
├── models/
│ └── recipe.js # Mongoose schema
├── routes/
│ └── recipeRouter.js # API route definitions
├── config/
│ └── db.js # MongoDB connection setup
├── app.js # Main app file
├── package.json
└── README.md

Install Dependencies:
npm install

Connect to MongoDB:
Create a .env file in the root and add your MongoDB URI:
MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the Server:
npm start

📬 API Endpoints
➕ Create a Recipe
POST /api/recipes
{
  "title": "Dosa",
  "ingredients": ["Rice", "Urad Dal"],
  "instructions": "Soak, grind, ferment, and cook on pan."
}
📄 Get All Recipes
GET /api/recipes

🔍 Get Recipe by ID
GET /api/recipes/:id

✏️ Update Recipe by ID
PUT /api/recipes/:id
{
  "instructions": "Updated instructions"
}

❌ Delete Recipe by ID
DELETE /api/recipes/:id

📮 Postman Collection
A sample Postman collection is included in the repository to test all endpoints.

Import it into Postman to try all API operations easily.

🛰️ Deployment
The app can be deployed on Render:

Create a new Web Service

Connect your GitHub repo

Set environment variables:

MONGO_URI

PORT (optional)

Deploy 🚀

📌 License
This project is open-source and free to use.

🙋‍♀️ Author
Thahira Sherin
GitHub
