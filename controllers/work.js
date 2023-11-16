const Work = require("../models/workDOA");

const { validate } = require("../models/work");
const Entity = require("../models/entityDOA");
const { validateEntity } = require("../models/entity");

const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");
const Papa = require("papaparse");

const dotenv = require("dotenv");
dotenv.config();
const url = process.env.DB;

exports.createWork = async function (req, res) {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const work = {
    name: req.body.name,
    type: req.body.type,
    startDate: req.body.startDate,
    userId: req.user.id,
  };

  try {
    const newlyCreatedWork = await Work.create(work);
    res.json({
      msg: "Work has been created successfully",
      data: work,
    });
  } catch (ex) {
    res.json({
      error: ex,
    });
  }
};

exports.getWorks = async function (req, res) {
  try {
    const getAllWorks = await Work.find({});
    res.json({
      msg: "Getting all works",
      data: getAllWorks,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.getWork = function (req, res) {
  try {
    const getWorkByName = Work.get({ name: req.params.name });
    res.json({
      msg: "Getting work by name",
      data: getWorkByName,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.updateWork = async function (req, res) {
  const work = {
    name: req.body.name,
    type: req.body.type,
    startDate: req.body.startDate,
    userId: req.body.userId,
  };
  console.log(req.params.id);
  try {
    const updatedWork = await Work.findByIdAndUpdate(req.params.id, work);
    res.json({
      msg: "Updated work stuff",
      data: work,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.removeWork = async function (req, res) {
  try {
    const removedWork = await Work.findByIdAndDelete(req.params.id);
    res.json({
      msg: `Work id removed: ${req.params.id}`,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
