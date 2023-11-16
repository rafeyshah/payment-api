const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groups");

router.post("/", groupController.createGroup);
router.get("/", groupController.getGroups);
router.patch("/:id", groupController.updateGroup);
router.delete("/:id", groupController.removeGroup);

module.exports = router;
