const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

const notFoundPage = path.join(__dirname, "views", "404.html");

const booksRoutes = require("./routes/books");
app.use("books", booksRoutes);
app.use(express.static(path.join(__dirname, "public")))
app.use((req, res, next) => {
  res.sendFile(notFoundPage);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
