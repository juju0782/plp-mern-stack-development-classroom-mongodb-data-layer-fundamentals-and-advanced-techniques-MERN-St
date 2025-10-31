# PLP Bookstore - MongoDB Project

## Description
This project uses MongoDB to store and manage book data inside a database named `plp_bookstore` and a `books` collection.

The project demonstrates:
- Creating a database and collection
- Inserting documents
- Fetching data (queries)
- Updating and deleting data
- Sorting, projection, and pagination
- Aggregation pipelines
- Indexing and using explain() for performance

---

## Files Included
1. insert_books.js — inserts sample books into the database
2. queries.js — contains all required MongoDB queries
3. README.md — documentation on how to run the project

---

## Requirements
Before running the project, install:
- Node.js (https://nodejs.org)
- MongoDB Compass or MongoDB Atlas

---

## Setup Instructions

1. Clone your GitHub Classroom repository:
   git clone <your_repository_url>
   cd <project_folder>

2. Install dependencies:
   npm init -y
   npm install mongodb

3. Edit `insert_books.js` and `queries.js` and replace the MongoDB connection string:
   const uri = "YOUR_MONGODB_CONNECTION_STRING";

Example for local MongoDB Compass:
   mongodb://127.0.0.1:27017

Example for MongoDB Atlas:
   mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/

---

## Run the project

### Insert sample data:
   node insert_books.js

### Run all MongoDB queries:
   node queries.js

---

## Submission Checklist
Before submitting, ensure your repository contains:
- insert_books.js
- queries.js
- README.md
- A screenshot of your books collection in MongoDB Compass or Atlas

