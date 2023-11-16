const express = require("express");
const { authentication } = require("../middleware/protected");
const workController = require("../controllers/work");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/", authentication, workController.createWork);
router.get("/:name", workController.getWork);
router.get("/", workController.getWorks);
router.patch("/:id", workController.updateWork);
router.delete("/:id", workController.removeWork);

module.exports = router;
