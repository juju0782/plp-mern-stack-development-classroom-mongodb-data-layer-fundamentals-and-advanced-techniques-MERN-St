// insert_books.js
const { MongoClient } = require("mongodb");

// Change this if using MongoDB Atlas instead of local MongoDB
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("plp_bookstore");
    const books = db.collection("books");

    await books.insertMany([
      {
        title: "The Silent Observer",
        author: "John Maxwell",
        genre: "Fiction",
        published_year: 2008,
        price: 1200,
        in_stock: true,
        pages: 320,
        publisher: "Pearson"
      },
      {
        title: "Mastering MongoDB",
        author: "Angela White",
        genre: "Technology",
        published_year: 2021,
        price: 2500,
        in_stock: true,
        pages: 410,
        publisher: "O'Reilly Media"
      },
      {
        title: "The African Sunrise",
        author: "Grace Muthoni",
        genre: "Biography",
        published_year: 2015,
        price: 1800,
        in_stock: false,
        pages: 290,
        publisher: "Nairobi Press"
      },
      {
        title: "Coding for Beginners",
        author: "Brian Muriithi",
        genre: "Technology",
        published_year: 2019,
        price: 2300,
        in_stock: true,
        pages: 350,
        publisher: "TechBooks Publishers"
      },
      {
        title: "The Lost Kingdom",
        author: "John Maxwell",
        genre: "Fiction",
        published_year: 2012,
        price: 1500,
        in_stock: true,
        pages: 450,
        publisher: "Pearson"
      },
      {
        title: "Business Strategy Essentials",
        author: "Lilian Roberts",
        genre: "Business",
        published_year: 2020,
        price: 2800,
        in_stock: true,
        pages: 500,
        publisher: "Harper Business"
      },
      {
        title: "Healthy Living",
        author: "Angela White",
        genre: "Health",
        published_year: 2011,
        price: 1700,
        in_stock: false,
        pages: 275,
        publisher: "HealthMedia"
      },
      {
        title: "The Road to Success",
        author: "Lilian Roberts",
        genre: "Motivational",
        published_year: 2005,
        price: 900,
        in_stock: true,
        pages: 150,
        publisher: "Harper Business"
      },
      {
        title: "Deep Learning Basics",
        author: "Brian Muriithi",
        genre: "Technology",
        published_year: 2023,
        price: 3000,
        in_stock: true,
        pages: 640,
        publisher: "TechBooks Publishers"
      },
      {
        title: "Legends of the Maasai",
        author: "Grace Muthoni",
        genre: "Culture",
        published_year: 2010,
        price: 2000,
        in_stock: true,
        pages: 380,
        publisher: "Nairobi Press"
      }
    ]);

    console.log("Books inserted successfully");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
