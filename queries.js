// queries.js
const { MongoClient } = require("mongodb");

// Replace with your real connection string from MongoDB Atlas or Compass
const uri = "mongodb://localhost:27017";

async function runQueries() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("plp_bookstore");
    const booksCollection = db.collection("books");

    let output = {};

    // ✅ BASIC CRUD QUERIES

    // Find all books in a specific genre
    output.booksInGenre = await booksCollection.find({ genre: "Fiction" }).toArray();

    // Find books published after a certain year
    output.booksAfterYear = await booksCollection.find({ published_year: { $gt: 2015 } }).toArray();

    // Find books by a specific author
    output.booksByAuthor = await booksCollection.find({ author: "George Orwell" }).toArray();

    // Update price of a specific book
    await booksCollection.updateOne(
      { title: "1984" },
      { $set: { price: 2000 } }
    );
    output.updatedBook = "Updated price of '1984'";

    // Delete a book by its title
    await booksCollection.deleteOne({ title: "Rich Dad Poor Dad" });
    output.deletedBook = "Deleted 'Rich Dad Poor Dad'";


    ///////////////////////////////////////
    // ✅ ADVANCED QUERIES
    ///////////////////////////////////////

    // Find books that are both in stock and published after 2010
    output.inStockAfter2010 = await booksCollection.find({
      in_stock: true,
      published_year: { $gt: 2010 }
    }).toArray();

    // Projection (only title, author, price)
    output.projectedBooks = await booksCollection.find(
      {},
      { projection: { title: 1, author: 1, price: 1, _id: 0 } }
    ).toArray();

    // Sort books by price ascending
    output.sortedPriceAsc = await booksCollection.find().sort({ price: 1 }).toArray();

    // Sort books by price descending
    output.sortedPriceDesc = await booksCollection.find().sort({ price: -1 }).toArray();

    // Pagination (limit and skip: 5 books per page)
    const page = 1;
    const pageSize = 5;
    output.paginatedBooks = await booksCollection.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .toArray();

    // ✅ AGGREGATION PIPELINES

    // Average price of books by genre
    output.avgPriceByGenre = await booksCollection.aggregate([
      { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
    ]).toArray();

    // Find author with the most books
    output.authorMostBooks = await booksCollection.aggregate([
      { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
      { $sort: { totalBooks: -1 } },
      { $limit: 1 }
    ]).toArray();

    // Group books by publication decade
    output.booksByDecade = await booksCollection.aggregate([
      {
        $group: {
          _id: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] },
          totalBooks: { $sum: 1 }
        }
      }
    ]).toArray();


    //INDEXING

    await booksCollection.createIndex({ title: 1 });
    await booksCollection.createIndex({ author: 1, published_year: -1 });

    // explain() → returns index execution plan (no .toArray() here)
    output.indexExplain = await booksCollection.find({ title: "1984" }).explain();


    //SINGLE CONSOLE LOG

    console.log(output);

  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

runQueries();
