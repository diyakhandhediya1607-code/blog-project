# Blog CRUD API

A simple **Blog Management REST API** built using **Node.js, Express.js, and MongoDB with Mongoose**.

This project was created to understand and practice the basic **CRUD operations** — Create, Read, Update, and Delete — using a backend application.

## 🚀 Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Thunder Client / Postman
* dotenv
* Nodemon

## 📌 Features

* Create a new blog
* Get all blogs
* Get a single blog by ID
* Update a blog
* Delete a blog
* Store blog data in MongoDB
* Basic error handling
* REST API structure

## 📂 Project Structure

```text
Blog-Project/
│
├── controllers/
│   └── blogController.js
│
├── models/
│   └── blogModel.js
│
├── routes/
│   └── blogRoutes.js
│
├── config/
│   └── env.js
│   
├── Db/
│   └── db.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Go to the project folder

```bash
cd Blog-Project
```

### 3. Install dependencies

```bash
npm install
```


### 4. Start the server

For development:

```bash
npm run dev
```

Or:

```bash
node server.js
```

The server will run on:

```text
http://localhost:5000
```

## 🔗 API Endpoints

| Method | Endpoint                   | Description       |
| ------ | -------------------------- | ----------------- |
| POST   | `/api/blog/addblog`        | Create a new blog |
| GET    | `/api/blog/getblog/:id`    | Get a single blog |
| PUT    | `/api/blog/updateblog/:id` | Update a blog     |
| DELETE | `/api/blog/deleteblog/:id` | Delete a blog     |

## 📝 Blog Data

A blog contains basic information such as:

```json
{
  "title": "Introduction to Node.js",
  "description": "Node.js is a JavaScript runtime used for backend development.",
  "author": "Vibhuti",
  "rating": 4.5
}
```

## 🔄 CRUD Operations

### Create

Used to add a new blog to the database.

```http
POST /api/blog/addblog
```

### Read


To get a particular blog:

```http
GET /api/blog/getblog/:id
```

### Update

Used to modify an existing blog.

```http
PUT /api/blog/updateblog/:id
```

### Delete

Used to remove a blog from the database.

```http
DELETE /api/blog/deleteblog/:id
```

## 🗄️ Database

This project uses **MongoDB** as the database and **Mongoose** to connect Node.js with MongoDB.

The blog documents are stored in a MongoDB collection.

## 🧪 API Testing

The APIs were tested using **Thunder Client** / **Postman**.

You can test:

* POST → Create Blog
* GET → Get Blogs
* GET → Get Blog by ID
* PUT → Update Blog
* DELETE → Delete Blog

## 🎯 Learning Objectives

Through this project, I practiced:

* Creating a Node.js backend
* Working with Express.js
* Creating REST APIs
* Connecting MongoDB with Mongoose
* Creating Mongoose models
* Using controllers and routes
* Performing CRUD operations
* Testing APIs using Thunder Client
* Handling basic backend errors

## Explaination Video
https://drive.google.com/file/d/1S7SlrVyvJQ15XS9QAIo7kusY2D1_FSQD/view?usp=sharing

## 👨‍💻 Author

**Vibhuti Karia**

Frontend Developer | BCA Student

## 📄 License

This project is created for learning and educational purposes.
