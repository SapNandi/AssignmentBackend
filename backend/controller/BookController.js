const Book = require("../Model/BookModel");
const ErrorHandler = require("../utils/ErrorHandler");
const CatchAsyncErrors = require("../utils/catchAsyncErrors");


// Create Book

exports.createBook = CatchAsyncErrors(async (req, res, next) => {
  
    const { name, ISBN, author, description, price, category } = req.body;
  
    const book = await Book.create({
      name,
      ISBN,
      author,
      description,
      price,
      category
    });
  
    res.status(201).json({
      success: true,
      book,
    });
  });


// Get All Books

exports.getAllBooks = CatchAsyncErrors(async (req, res) => {
  const bookCount = await Book.countDocuments();

  const book = await Book.find();

  res.status(200).json({
    success: true,
    bookCount: bookCount,
    book,
  });
});

// Update Book

exports.updateBook = CatchAsyncErrors(async (req, res, next) => {
  let book = await Book.findById(req.params.id);

  if (!book) {
    return next(new ErrorHandler("Book not found!!", 404));
  }

  book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Book Updated",
  });
});

// Delete Book

exports.deleteBook = CatchAsyncErrors(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return next(new ErrorHandler("Lawyer not found!!", 404));
  }

  await book.deleteOne();

  res.status(200).json({
    success: true,
    message: "Book Deleted",
  });
});
