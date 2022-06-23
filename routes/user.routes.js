const express = require("express");
const router = express.Router();

const {
  get,
  getById,
  post,
  patch,
  deleteRegistration,
} = require("../controllers/users.controller");

router.route("/").get(get).post(post);

router.route("/:id").get(getById).patch(patch).delete(deleteRegistration);

module.exports = { usersRoter: router };
