const express = require("express");
const router = express.Router();

const {
  create: createBlog,
  read: readBlog,
  delete: deleteBlog,
  update: updateBlog,
} = require("../Controllers/blogController");

const {
  create: createBlogDetails,
  read: readBlogDetails,
  delete: deleteBlogDetails,
  update: updateBlogDetails,
} = require("../Controllers/blogDetailsController");

const {
  create: createComment,
  read: readComment,
  delete: deleteComment,
  update: updateComment,
} = require("../Controllers/commentController");

const {
  create: createMessage,
  read: readMessage,
  delete: deleteMessage,
  update: updateMessage,
} = require("../Controllers/messageController");

const {
  create: createPortfolio,
  read: readPortfolio,
  delete: deletePortfolio,
  update: updatePortfolio,
} = require("../Controllers/portfolioController");

const {
  create: createProduct,
  read: readProduct,
  delete: deleteProduct,
  update: updateProduct,
} = require("../Controllers/productController");

const {
  create: createProfit,
  read: readProfit,
  delete: deleteProfit,
  update: updateProfit,
} = require("../Controllers/profitController");

const {
  create: createProject,
  read: readProject,
  delete: deleteProject,
  update: updateProject,
} = require("../Controllers/projectController");

const {
  create: createService,
  read: readService,
  delete: deleteService,
  update: updateService,
} = require("../Controllers/serviceController");

const {
  create: createTitle,
  read: readTitle,
  delete: deleteTitle,
  update: updateTitle,
} = require("../Controllers/titleController");

// Define router paths for the controller functions
// Blog Controller Routes
router.get("/blog/create", createBlog);
router.get("/blog/read", readBlog);
router.get("/blog/delete", deleteBlog);
router.get("/blog/update", updateBlog);

// Blog Details Controller Routes
router.get("/blogdetails/create", createBlogDetails);
router.get("/blogdetails/read", readBlogDetails);
router.get("/blogdetails/delete", deleteBlogDetails);
router.get("/blogdetails/update", updateBlogDetails);

// Comment Controller Routes
router.get("/comment/create", createComment);
router.get("/comment/read", readComment);
router.get("/comment/delete", deleteComment);
router.get("/comment/update", updateComment);

// Message Controller Routes
router.get("/message/create", createMessage);
router.get("/message/read", readMessage);
router.get("/message/delete", deleteMessage);
router.get("/message/update", updateMessage);

// Portfolio Controller Routes
router.get("/portfolio/create", createPortfolio);
router.get("/portfolio/read", readPortfolio);
router.get("/portfolio/delete", deletePortfolio);
router.get("/portfolio/update", updatePortfolio);

// Product Controller Routes
router.get("/product/create", createProduct);
router.get("/product/read", readProduct);
router.get("/product/delete", deleteProduct);
router.get("/product/update", updateProduct);

// Profit Controller Routes
router.get("/profit/create", createProfit);
router.get("/profit/read", readProfit);
router.get("/profit/delete", deleteProfit);
router.get("/profit/update", updateProfit);

// Project Controller Routes
router.get("/project/create", createProject);
router.get("/project/read", readProject);
router.get("/project/delete", deleteProject);
router.get("/project/update", updateProject);

// Service Controller Routes
router.get("/service/create", createService);
router.get("/service/read", readService);
router.get("/service/delete", deleteService);
router.get("/service/update", updateService);

// Title Controller Routes
router.get("/title/create", createTitle);
router.get("/title/read", readTitle);
router.get("/title/delete", deleteTitle);
router.get("/title/update", updateTitle);

module.exports = router;
