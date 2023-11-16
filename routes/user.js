const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const { authentication } = require("../middleware/protected");
const { authorization } = require("../utils/authUtils");

router.post(
  "/signup",
  authentication,
  authorization("ADMIN"),
  userController.createUser
);
router.post("/login", userController.getUser);
router.get("/allusers", userController.getUsers);
module.exports = router;
