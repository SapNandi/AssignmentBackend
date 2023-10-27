const express = require("express");

const {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controller/BookController");

const router = express.Router();

router.route("/books").get(getAllBooks);
router.route("/books/new").post(createBook);
router.route("/books/:id").put(updateBook);
router.route("/books/:id").delete(deleteBook);

module.exports = router;